import HeaderFooter from "../Common/index";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import { Button, Card } from 'react-bootstrap';
import { Fade, Zoom } from "react-awesome-reveal";
import { Gradient } from 'react-gradient';


// import { GradientText, Gradient } from 'react-gradient-text';
// import Gradient from '../node_modules/gradient/index.js';
// let rainbow = Gradient('#0071bc', '#662d91', '#e5005d', 10).toArray('rgbString');


const gradients = [
    ['#bd19d6', '#ea7d10'],
    ['#ff2121', '#25c668'],
];

const Body = () => {
    var settings = {
        dots: true
    }
    return (
        <HeaderFooter>
            <div style={{ padding: "40px", background: "lightgray", margin: "auto" }}>
                <Slider {...settings}>
                    <div>
                        <img src="https://www.gitam.edu/campus_cms/assets/uploads/slider/1602241365_slider.jpg" width="100%" height="250px" />
                    </div>
                    <div>
                        <img src="https://www.gitam.edu/campus_cms/assets/uploads/slider/1605935704_slider.jpg" width="100%" height="250px" />
                    </div>
                    <div>
                        <img src="https://www.gitam.edu/campus_cms/assets/uploads/slider/1581662296_slider.jpg" width="100%" height="250px" />
                    </div>
                </Slider>
            </div>

            <div style={{ padding: "20px" }}></div>
            <div style={{ paddingLeft: "50px" }}>
                <Row style={{ textAlign: "center" }}>
                    <Col>
                        <Zoom>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Placements</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Zoom>

                    </Col>
                    <Col>
                        <Zoom>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Student Assignments</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Zoom>
                    </Col>
                    <Col>
                        <Zoom>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Learning Resources</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Zoom>
                    </Col>
                    <div style={{ paddingBottom: "10px" }}></div>

                   
                    {/* <GradientText data='React Gradient Text' gradient={rainbow}></GradientText> */}
                    
                    {/* <div style={{ paddingBottom: "4000px" }}></div> */}
                </Row>
                <Gradient
                    gradients={[
                        ['#FFFD00', '#9CA2FF'],
                        ['#FF47F4', '#6DFF5C'],
                    ]}
                    property="text"
                    element="h1"
                    angle="30deg"
                    className="text-xx"
                >
                    react-gradient
                </Gradient>

            </div>
            <div style={{ padding: "20px" }}></div>

        </HeaderFooter>
    )
}

export default Body;