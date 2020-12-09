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
    <div class="Login-component">
      <div style={{ textAlign: "left", paddingLeft: "35%", paddingRight: "35%", paddingTop: "10%" }}>
        <h4 style={{color:"blue"}}>Login to Access TnP Student Portal</h4>
        <div style={{padding: "20px"}}></div>
        <Form onSubmit={onFormSubmit}>
          <Form.Group>
            <Form.Control type="email" name="email" placeholder="Email" />
          </Form.Group>
          <div style={{padding: "20px"}}></div>
          <Form.Group>
            <Form.Control type="password" placeholder="password" name="password" />
          </Form.Group>
          <div style={{padding: "20px"}}></div>
          <Button variant="outline-dark" style={{ marginLeft: "110px", color: "black" }}> <Link to="/">Home</Link> </Button>
          <Button variant="success" type="submit" style={{ marginLeft: "20px", backgroundColor: "white", borderColor: "black" }}>
            <Link to="/home">Submit</Link>
          </Button>
          <div style={{padding: "20px"}}></div>
        </Form>
        <Card>
          <Card.Body>
            <Card.Text>
              <h6>
                *NOTE-Please enter the mail and password provided by TnP.<br/><br/>
                Incase of any issues contact the TnP.
              </h6>
            </Card.Text>
          </Card.Body>

        </Card>
        <div style={{padding: "27px"}}></div>
        
      </div>
    </div>
  )
}

export default Login;