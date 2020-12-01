import { Link } from "react-router-dom";

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
  <Button variant="outline-dark" style={{ marginLeft: "110px", color: "black" }}> <Link to="/">Home</Link> </Button>
  <Button variant="success" type="submit" style={{ marginLeft: "20px", backgroundColor: "white", borderColor: "black" }}>
    <Link to="/home">Submit</Link> 
  </Button>
</Form>

</div>

        </>
    )
}

export default Login;