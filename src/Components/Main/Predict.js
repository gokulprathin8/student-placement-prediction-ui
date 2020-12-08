import { Form, Button, Row, Col } from "react-bootstrap";


const Predict = () => {
    return (
        <>
    <Form>
        <Row>
            <Col>
            <Form.Group controlId="formTenthMarks">
                <Form.Label>Tenth Marks</Form.Label>
                <Form.Control type="text" placeholder="Tenth Marks" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="formTwelthMarks">
                <Form.Label>Twelth Marks</Form.Label>
                <Form.Control type="text" placeholder="Twelth Marks" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="formBtechMarks">
    <Form.Label>Btech Marks</Form.Label>
    <Form.Control type="text" placeholder="Btech Mark" />
  </Form.Group>
            
            </Col>
        </Row>
        <Row>
            <Col>
            <Form.Group controlId="formWebDevelopment">
    <Form.Label>Web Development</Form.Label>
    <Form.Control type="text" placeholder="Web Development" />
  </Form.Group>
            </Col>    
            <Col>
            <Form.Group controlId="formMachinelearning">
    <Form.Label>Machine learning</Form.Label>
    <Form.Control type="text" placeholder="Machine learning" />
  </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="formAndroiddevelopment">
    <Form.Label>Android development</Form.Label>
    <Form.Control type="text" placeholder="Android development" />
  </Form.Group>
            </Col>
        </Row> 
        <Row>
            <Col>
            <Form.Group controlId="formCommunicationSkills">
    <Form.Label>Communication Skills</Form.Label>
    <Form.Control type="text" placeholder="Communication Skills" />
  </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="formInternship">
    <Form.Label>Internship</Form.Label>
    <Form.Control type="text" placeholder="Internship" />
  </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="formProjects">
    <Form.Label>Projects</Form.Label>
    <Form.Control type="text" placeholder="Projects" />
  </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col xs={4} md={4}>
            <Form.Group controlId="formCompetitiveCoding">
                <Form.Label>Competitive Coding</Form.Label>
                <Form.Control type="text" placeholder="Competitive Coding" />
            </Form.Group>
            </Col>
        </Row>
        <div style={{ textAlign: "center" }}>
            <Button variant="primary" type="submit">Click to Predict</Button>
        </div>
        
    </Form>

    
    </>
    )
}

export default Predict;