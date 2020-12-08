import { Link } from "react-router-dom";
import './login.css';

const { Card, Form, Button } = require("react-bootstrap")

const Login = (props) => {
  const pass = () => {
    <Link to="/home"/>
  }

  const fail = () => {
    <Link to="/login"/>
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    console.log(formDataObj.email);
    if (formDataObj.email == "221710304019@gitam.in" && formDataObj.password == "password@123") {
        console.log("correct info");
    } else {
          fail();
    }
    console.log(formDataObj);
  }

  return (
    <>
      <div style={{ textAlign: "left", paddingLeft: "35%", paddingRight: "35%", paddingTop: "15%" }}>
        <Form onSubmit={onFormSubmit}>
          <Form.Group>
            <Form.Control type="email" name="email" placeholder="Email" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="password" placeholder="password" name="password" />
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