import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
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
                            <FontAwesomeIcon icon={faUser} /> Mr. R. Sampath Kumar
                        <FontAwesomeIcon icon={faEnvelope} /> tnp.it@gitam.edu
                        <FontAwesomeIcon icon={faPhone} />09885620835
                        </Card.Text>
                    </Card.Body>
                    </Card>

                </Col>

                <Col>

                    <Card style={{ width: '18rem' , textAlign:"center"}}>
                        <Card.Img variant="top" src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/2870271424a5470bf461c190a0ba5a5a.jpg" />
                        <Card.Body>
                        <Card.Text>
                            <FontAwesomeIcon icon={faUser} /> Mr. M. Raghavendra
                        <FontAwesomeIcon icon={faEnvelope} />  raghavendra.mangali@gitam.edu
                        <FontAwesomeIcon icon={faPhone} /> 9573232225
                        </Card.Text>
                    </Card.Body>
                    </Card>

                </Col>

                <Col>

                    <Card style={{ width: '18rem', textAlign:"center" }}>
                        <Card.Img variant="top" src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/055e84c1b3660242509e01a2731eeeb3.jpg" />
                        <Card.Body>
                        <Card.Text>
                            <FontAwesomeIcon icon={faUser} /> Mr. CH. Bala Krishna
                        <FontAwesomeIcon icon={faEnvelope} />  balu.chinnala@gitam.edu
                        <FontAwesomeIcon icon={faPhone} />09703537403
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