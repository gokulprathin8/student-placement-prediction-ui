import { Button, Form } from "react-bootstrap";

const Feedback = () => {
    return (
        <div style={{ width: "250%", paddingLeft: "40px" }}>
            <Form>
                <Form.Group controlId="formfeeedbacktitle">
                    <Form.Label>What bothered you?</Form.Label>
                    <Form.Control type="text" placeholder="We will reach you as soon as possible." />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Can you eloborate?</Form.Label>
                    <Form.Control as="textarea" rows={3}  placeholder="Please elobrate the message, so we can serve you well."/>
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
export default Feedback;