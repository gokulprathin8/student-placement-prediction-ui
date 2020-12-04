const { Form, Button, Row, Col } = require("react-bootstrap")

const Predict = () => {
    return (
        <>
<Row>
<Col>
        <Form>
  <Form.Group controlId="formTenthMarks">
    <Form.Label>Tenth Marks</Form.Label>
    <Form.Control type="text" placeholder="Tenth Marks" />
  </Form.Group>

  <Form.Group controlId="formTwelthMarks">
    <Form.Label>Twelth Marks</Form.Label>
    <Form.Control type="text" placeholder="Twelth Marks" />
  </Form.Group>

  <Form.Group controlId="formCompetitiveCoding">
    <Form.Label>Competitive Coding</Form.Label>
    <Form.Control type="text" placeholder="Competitive Coding" />
  </Form.Group>

  <Form.Group controlId="formWebDevelopment">
    <Form.Label>Web Development</Form.Label>
    <Form.Control type="text" placeholder="Web Development" />
  </Form.Group>

  <Form.Group controlId="formMachinelearning">
    <Form.Label>Machine learning</Form.Label>
    <Form.Control type="text" placeholder="Machine learning" />
  </Form.Group>

  <Form.Group controlId="formAndroiddevelopment">
    <Form.Label>Android development</Form.Label>
    <Form.Control type="text" placeholder="Android development" />
  </Form.Group>

  <Form.Group controlId="formCommunicationSkills">
    <Form.Label>Communication Skills</Form.Label>
    <Form.Control type="text" placeholder="Communication Skills" />
  </Form.Group>

  <Form.Group controlId="formInternship">
    <Form.Label>Internship</Form.Label>
    <Form.Control type="text" placeholder="Internship" />
  </Form.Group>

  <Form.Group controlId="formProjects">
    <Form.Label>Projects</Form.Label>
    <Form.Control type="text" placeholder="Projects" />
  </Form.Group>
  <Button variant="primary" type="submit">Click to Predict</Button>
</Form>
</Col>
</Row>
        </>
  
    )
}

export default Predict;