const { Card, Form, Button } = require("react-bootstrap")

const Login = () => {
    return (
        <>

<div style={{ textAlign:"left", paddingLeft: "35%", paddingRight: "35%", paddingTop: "15%" }}>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
  </Form.Group>
  <Button variant="primary" type="submit" style={{ marginLeft: "150px" }}>
    Submit
  </Button>
</Form>

</div>

        </>
    )
}

export default Login;