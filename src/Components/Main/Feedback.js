import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {connect} from "react-redux";
import {postFeedback} from "../../redux/actions";

const submitHandler = (e) => {
    e.preventDefault()
    console.log('pressed');
    const form = e.currentTarget;
    console.log(form);
}


const Feedback = (props) => {


    const [value, setValue] = useState();
    const onInput = ({target: {value}}) => setValue(value);

    const [description, setDescription] = useState();
    const getDescription = ({target: {value}}) => setDescription(value);

    const onFormSubmit = (e) => {
        e.preventDefault()
        setValue()
        const data = {
            "user": 1,
            "title": value,
            "description": description
        }
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries())
        formDataObj.user = 1;
        props.postFeedback(formDataObj);
    };


    return (
        <div style={{width: "250%", paddingLeft: "40px"}}>
            <Form onSubmit={onFormSubmit}>
                <Form.Group>
                    <Form.Control type="text" name="title" placeholder="We will reach you as soon as possible."/>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" name="description" as="textarea" rows={3} placeholder="Please elobrate the message, so we can serve you well."/>
                </Form.Group>
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    )
}
const mapStateToProps = (state) => {
    return {feedback: state.feedback.feedbackList}
}

export default connect(mapStateToProps, {postFeedback}, null, {forwardedRef: true})(Feedback);
