import React, { useEffect } from "react";
import { Button, Col, Form, Row } from 'react-bootstrap';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {connect} from "react-redux";
import {postAssignment} from "../../redux/actions";


// const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

const Assignment = (props) => {

        useEffect(() => {
            props.postAssignment();
        }, []);

    const wlfnkew = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());
        formDataObj.user_id = 1;
        formDataObj.user = 1;
        props.postAssignment(formDataObj);
    }

        return(
        <>
            <Form onSubmit={wlfnkew} style={{ width: "200%" }}>
                <Row style={{ width: "100%",paddingLeft: "10px" }}>
                    <Col>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Title" name="title" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Subject" name="subject" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Control as="textarea" rows={10} placeholder="Main Content" name="assignmentBody"/>
                </Form.Group>
                <Form.Group>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
        )

}
const mapStateToProps = (state) => {
    return { assignments: state.assignments.assignmentsList };
}

export default connect(mapStateToProps, {postAssignment})(Assignment);
