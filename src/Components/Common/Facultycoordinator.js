import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
const { Card, Col, Row } = require("react-bootstrap")
const Facultycoordinator = () =>
{
    return(
        <>
        <div>
            <div style={{ padding: "20px" }}></div>
        <Row>
                <Col>

                    <Card style={{ width: '18rem', textAlign:"center" }}>
                        <Card.Img variant="top" src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/0581e74645a30dad8f9fad0d015ffa1e.jpg" />
                        <Card.Body>
                        <Card.Text>
                            <FontAwesomeIcon icon={faUser} /> &nbsp;Mr. R. Sampath Kumar<br/>
                        <FontAwesomeIcon icon={faEnvelope} /> &nbsp;tnp.it@gitam.edu<br/>
                        <FontAwesomeIcon icon={faPhone} />&nbsp;09885620835
                        </Card.Text>
                    </Card.Body>
                    </Card>

                </Col>

                <Col>

                    <Card style={{ width: '18rem' , textAlign:"center"}}>
                        <Card.Img variant="top" src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/2870271424a5470bf461c190a0ba5a5a.jpg" />
                        <Card.Body>
                        <Card.Text>
                            <FontAwesomeIcon icon={faUser} /> &nbsp;Mr. M. Raghavendra<br/>
                        <FontAwesomeIcon icon={faEnvelope} /> &nbsp; raghavendra.mangali@gitam.edu<br/>
                        <FontAwesomeIcon icon={faPhone} />&nbsp; 9573232225
                        </Card.Text>
                    </Card.Body>
                    </Card>

                </Col>

                <Col>

                    <Card style={{ width: '18rem', textAlign:"center" }}>
                        <Card.Img variant="top" src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/055e84c1b3660242509e01a2731eeeb3.jpg" />
                        <Card.Body>
                        <Card.Text>
                            <FontAwesomeIcon icon={faUser} /> &nbsp;Mr. CH. Bala Krishna<br/>
                        <FontAwesomeIcon icon={faEnvelope} /> &nbsp; balu.chinnala@gitam.edu<br/>
                        <FontAwesomeIcon icon={faPhone} />&nbsp;09703537403
                        </Card.Text>
                    </Card.Body>
                    </Card>

                </Col>
                </Row>
        

        </div>

        </>

    )
}
export default Facultycoordinator;