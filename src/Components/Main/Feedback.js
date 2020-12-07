import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import {connect} from "react-redux";
import { postFeedback } from "../../redux/actions";

const submitHandler = (e) => {
    e.preventDefault()
    console.log('pressed');
    const form = e.currentTarget;
    console.log(form);
}


const Feedback = () => {

    const [value, setValue] = useState(), onInput = ({target:{value}}) => setValue(value),
        onFormSubmit = e => {
            e.preventDefault()
            console.log(value)
            setValue()
    }
    const [description, setDescription] = useState(), getDescription = ({target: {value}}) => setDescription(value)

    return (
        <div style={{ width: "250%", paddingLeft: "40px" }}>
            <Form onSubmit={onFormSubmit}>
                <Form.Group controlId="formfeeedbacktitle">
                    <Form.Label>What bothered you?</Form.Label>
                    <Form.Control type="text" placeholder="We will reach you as soon as possible." onChange={onInput}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Can you eloborate?</Form.Label>
                    <Form.Control as="textarea" rows={3}  placeholder="Please elobrate the message, so we can serve you well." onChange={onInput}/>
                </Form.Group>
                <div style={{ textAlign: "center" }}>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </div>
            </Form>
        </div>

    )
}
const mapStateToProps = (state) => {
    return { feedback: state.feedback.feedbackList }
}

export default connect(mapStateToProps, {postFeedback}, null, {forwardedRef: true})(Feedback);