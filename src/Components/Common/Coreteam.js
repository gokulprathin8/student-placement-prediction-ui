import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
const { Card, Col, Row } = require("react-bootstrap")

const Coreteam = () =>
{
    return(
        <div>
            <div style={{ padding: "20px" }}></div>
        <Row>
                <Col>

                    <Card style={{ width: '18rem', textAlign:"center" }}>
                        <Card.Img variant="top" src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/02a3fd4b7369484d2478756ceb8312c1.jpg" />
                        <Card.Body>
                        <Card.Text>
                            <FontAwesomeIcon icon={faUser} /> Dr. N. Venu Kumar Director CGC
                        <FontAwesomeIcon icon={faEnvelope} /> directorcgc_hyd@gitam.edu
                        <FontAwesomeIcon icon={faPhone} />08455-221312
                        </Card.Text>
                    </Card.Body>
                    </Card>

                </Col>

                <Col>

                    <Card style={{ width: '18rem', textAlign:"center" }}>
                        <Card.Img variant="top" src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/75963440100a70e7822e6c8171bd647c.jpg" />
                        <Card.Body>
                        <Card.Text>
                            <FontAwesomeIcon icon={faUser} /> Mr. M. Manigandan
                        <FontAwesomeIcon icon={faEnvelope} /> tnp.tpo@gitam.edu
                        <FontAwesomeIcon icon={faPhone} />09000203862
                        </Card.Text>
                    </Card.Body>
                    </Card>

                </Col>

                <Col>

                    <Card style={{ width: '18rem' , textAlign:"center"}}>
                        <Card.Img variant="top" src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/aa64e89c27b8b0d97ca6f7619e4cb7d1.jpg" />
                        <Card.Body>
                        <Card.Text>
                            <FontAwesomeIcon icon={faUser} /> Mr. T. Lokesh
                        <FontAwesomeIcon icon={faEnvelope} /> tnp.po@gitam.edu
                        <FontAwesomeIcon icon={faPhone} />09603472479
                        </Card.Text>
                    </Card.Body>
                    </Card>

                </Col>
                </Row>
        

        </div>

    )
}
export default Coreteam;