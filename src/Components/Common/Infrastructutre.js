import { Card, Col, Row } from "react-bootstrap";

const Infrastructure = () => {
    return (
        <>
            <div style={{ padding: "20px" }}></div>
            <Row>
                <Col>
                    <Card style={{ width: '18rem', textAlign:"center" }}>
                        <Card.Img variant="top" src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/249a141e2386141c3693c6ad862517ee.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Auditorium of 2500 capacity for Pre-Placement talk by the recruiters<br/>
                                Computer labs with 1200 nodes for online exam<br/>
                                Group discussion and Interview Rooms
            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' , textAlign:"center"}}>
                        <Card.Img variant="top" src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/cf9e30a7bdb9d261729eaa0decb60dc1.JPG" />
                        <Card.Body>
                            <Card.Text>
                            Lecture halls for conducting regular campus recruitment training programs
            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem', textAlign:"center" }}>
                        <Card.Img variant="top" src="https://gitamhydgstplacements.gitam.edu/admin_hyd_gst/assets/uploads/a3a8a161b727d9445437566487569bec.jpg" />
                        <Card.Body>
                            <Card.Text>
                            
Personality development library - Reference books, books on interview skills, model question papers, competitive exams, GRE
Seminar halls for sessions by Technical & HR experts from MNCs
            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>

    )
}
export default Infrastructure;