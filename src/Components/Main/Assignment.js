import React, {useState} from "react";
import { Button, Col, Form, Row } from 'react-bootstrap';
import { EditorState } from 'draft-js';
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

class Assignment extends React.Component {
    constructor(props) {
        super(props);
        const contentState = convertFromRaw(content);
        this.state = {
          editorState: EditorState.createEmpty(),
        };
      }
    render() {
        const { editorState } = this.state;
        const wlfnkew = (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const formDataObj = Object.fromEntries(formData.entries())
            formDataObj.mainBody = this.state.editorState;
            console.log(formDataObj);
        }
        const onEditorStateChange = (editorState) => {
            this.setState({
              editorState,
            });
          };
        return(
        <>
            <Form onSubmit={wlfnkew}>
                <Row>
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

                    <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={onEditorStateChange}

                    />

                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
        )
        }
}
export default Assignment;