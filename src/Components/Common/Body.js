import HeaderFooter from "../Common/index";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import { Button, Card } from 'react-bootstrap';

const Body = () => {
    var settings = {
        dots: true
    }
    return (
        <HeaderFooter>
        <div style={{ padding: "40px", background: "lightgray", margin: "auto" }}>
                <Slider {...settings}>
                    <div>
                        <img src="https://webmaileventscms.gitam.edu/assets/uploads/eventsforwebsites/2aa500954d1ed256c39ff72c6d34439e_eventsforwebsites.jpg" width="100%" height="250px" />
                    </div>
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
            <Row>
                <Col>

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

                </Col>
                <Col>

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
                </Col>
                <Col>
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
                </Col>
            </Row>
            </div>

            

            <div style={{ padding: "20px" }}></div>

        </HeaderFooter>
    )
}

export default Body;