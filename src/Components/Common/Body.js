import HeaderFooter from "../Common/index";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import { Button, Card, Tabs, Tab } from 'react-bootstrap';
import { Fade, Zoom, Bounce, Rotate, Slide, Roll } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Coreteam from "./Coreteam";
import Facultycoordinator from "./Facultycoordinator";
import Recruitmentprocess from "./Recruitmentprocess";
import Infrastructure from "./Infrastructutre";






// import { GradientText, Gradient } from 'react-gradient-text';
// import Gradient from '../node_modules/gradient/index.js';
// let rainbow = Gradient('#0071bc', '#662d91', '#e5005d', 10).toArray('rgbString');




function Body() {
    var settings = {
        dots: true
    };
    return (
        <HeaderFooter>
            <div style={{ padding: "40px", background: "lightblue", margin: "auto" }}>
                <Slider {...settings}>
                    <div>
                        <img src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/slider/d7e5e75a90b2f51ad6611d881a398220.jpg" width="100%" height="250px" />
                    </div>
                    <div>
                        <img src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/slider/10f08e7a76483a560b4f99c19a69d5f8.jpg" width="100%" height="250px" />
                    </div>
                    <div>
                        <img src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/slider/1fb65c1febe3323ba7ba8e84db0a99a8.jpg" width="100%" height="250px" />
                    </div>
                    <div>
                        <img src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/slider/ecb1b4b78c63d1c81c8feed7671422de.jpg" width="100%" height="250px" />
                    </div>
                </Slider>
            </div>
            <div style={{ padding: "20px" }}></div>

            <div style={{ padding: "20px" }}></div>
            <div style={{ paddingLeft: "50px" }}>
                <div style={{ textAlign: "center" }}>
                    <Slide top>
                        <h2>About Training & Placements</h2>
                    </Slide>
                    <div style={{ padding: "20px" }}></div>
                    <Fade top>
                        <Card>
                            <Card.Body>Training and Placement Cell (T&P) was established in 2010. It functions with the coordination of heads of the departments, faculty, and student representatives. GITAM has intelligent and highly motivated young students who aspire to have a rewarding career in leading firms, MNC’s and well established organizations. Training & Placement Cell thoroughly trains students right from the first year to deliver their best in the selection processes of reputed organizations.</Card.Body>
                        </Card>
                    </Fade>
                </div>
                <div style={{ padding: "20px" }}></div>
                <div style={{ padding: "20px" }}></div>
                <div style={{ textAlign: "center" }}>
                    <Bounce left>
                        <h2>Placement statistics 2019-20</h2>
                    </Bounce>
                </div>
                <div style={{ padding: "20px" }}></div>
                <Row style={{ textAlign: "center" }}>
                    <Col>
                        <Zoom>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Highest salary offered</Card.Title>
                                    <Card.Text>
                                        Rs 12 LPA
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Zoom>

                    </Col>
                    <Col>
                        <Zoom>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Placement percentage*</Card.Title>
                                    <Card.Text>
                                        88%
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Zoom>
                    </Col>
                    <Col>
                        <Zoom>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Average salary offered</Card.Title>
                                    <Card.Text>
                                        Rs 4.9 LPA
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Zoom>
                    </Col>
                    <div style={{ paddingBottom: "10px" }}></div>





                </Row>

                <div style={{ padding: "20px" }}></div>
            </div>
            <div style={{ padding: "20px" }}></div>
            <div style={{ textAlign: "center" }}>
                <Bounce left>
                    <h2>Campus Drives</h2>
                </Bounce>
            </div>
            <div style={{ padding: "20px" }}></div>
            <Row>
                <Col>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/105411.jpg" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>AMAZON CAMPUS DRIVE</Card.Title>
                        </Card.Body>
                    </Card>

                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/2.jpg" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>BERKADIA CAMPUS DRIVE</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/DSC_0019.JPG" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>CGI CAMPUS DRIVE</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div style={{ padding: "20px" }}></div>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/DSC_0174.JPG" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>DARK HORSE DIGITAL CAMPUS DRIVE</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/dasaqsas.jpg" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>MINDTREE CAMPUS DRIVE</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/SAFSAF.jpg" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>VIRTUSA CAMPUS DRIVE</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <div style={{ padding: "20px" }}></div>
            <div>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Core Team">
                        <Coreteam/>

                    </Tab>
                    <Tab eventKey="faculty" title="Faculty Co-ordinators">
                        <Facultycoordinator/>

                    </Tab>
                    <Tab eventKey="contact" title="Recruitment Process" >
                        <Recruitmentprocess/>

                    </Tab>
                    <Tab eventKey="profile" title="Infrastructure" >
                        <Infrastructure/>

                    </Tab>
                </Tabs>
            </div>
            <div style={{ padding: "20px" }}></div>
            <div style={{ padding: "20px" }}></div>


            <div style={{ textAlign: "center" }}>
                <Bounce left>
                    <h2>Contact Us</h2>
                </Bounce>
            </div>
            <div style={{ textAlign: "center", paddingLeft: "37%" }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            GITAM (Deemed to be University)
                            Hyderabad
                            Rudraram, Patancheru Mandal,
                            Hyderabad, Telangana,
                            Sangareddy Dist- 502329
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div style={{ padding: "20px" }}></div>
            <div style={{ textAlign: "center", paddingLeft: "37%" }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            <FontAwesomeIcon icon={faUser} /> Dr. N. Venu Kumar Director CGC
                        <FontAwesomeIcon icon={faEnvelope} /> directorcgc_hyd@gitam.edu
                        <FontAwesomeIcon icon={faPhone} />08455-221312
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div style={{ padding: "20px" }}></div>

        </HeaderFooter>
    );
}

export default Body;