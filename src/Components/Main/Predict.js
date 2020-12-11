import React, {useState} from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";


const Predict = () => {
    const [tenth, setTenth] = useState();
    const [twelth, setTwelth] = useState();
    const [btech, setBtech] = useState();
    const [wdev, setWdev] = useState();
    const [adev, setAdev] = useState();
    const [ml, setMl] = useState();
    const [cs, setCs] = useState();
    const [cp, setCp] = useState();
    const [int, setInt] = useState();
    const [pr, setPr] = useState();
    const a = 40;

    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());
        setTenth(formDataObj.formTenthMarks);
        setTwelth(formDataObj.formTwelthMarks);
        setBtech(formDataObj.formBtechMarks);
        setWdev(formDataObj.formWebDevelopment);
        setAdev(formDataObj.formAndroiddevelopment);
        setMl(formDataObj.formMachinelearning);
        setCs(formDataObj.formCommunicationSkills);
        setCp(formDataObj.formCompetitiveCoding);
        setInt(formDataObj.formInternship);
        setPr(formDataObj.formProjects);
    }

    return (
        <>
            <Form onSubmit={onFormSubmit}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Tenth Marks</Form.Label>
                            <Form.Control type="text" placeholder="Tenth Marks" name="formTenthMarks" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group >
                            <Form.Label>Twelth Marks</Form.Label>
                            <Form.Control type="text" placeholder="Twelth Marks" name="formTwelthMarks" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group >
                            <Form.Label>Btech Marks</Form.Label>
                            <Form.Control type="text" placeholder="Btech Mark" name="formBtechMarks" />
                        </Form.Group>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group >
                            <Form.Label>Web Development</Form.Label>
                            <Form.Control type="text" placeholder="Web Development" name="formWebDevelopment" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group >
                            <Form.Label>Machine learning</Form.Label>
                            <Form.Control type="text" placeholder="Machine learning" name="formMachinelearning" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group >
                            <Form.Label>Android development</Form.Label>
                            <Form.Control type="text" placeholder="Android development" name="formAndroiddevelopment" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group >
                            <Form.Label>Communication Skills</Form.Label>
                            <Form.Control type="text" placeholder="Communication Skills" name="formCommunicationSkills" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group >
                            <Form.Label>Internship</Form.Label>
                            <Form.Control type="text" placeholder="Internship" name="formInternship" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group >
                            <Form.Label>Projects</Form.Label>
                            <Form.Control type="text" placeholder="Projects" name="formProjects" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} md={4}>
                        <Form.Group >
                            <Form.Label>Competitive Coding</Form.Label>
                            <Form.Control type="text" placeholder="Competitive Coding" name="formCompetitiveCoding" />
                        </Form.Group>
                    </Col>
                </Row>
                <div style={{ textAlign: "center" }}>
                    <Button variant="primary" type="submit">Click to Predict</Button>
                </div>

               
                        


                <div style={{ padding: "20px" }}></div>
                <div style={{ textAlign: "center", paddingLeft: "225px" }}>
                    <Card style={{ width: '30rem' }}>
                        <Card.Body>
                            <Card.Text style={{ textAlign: "center" }}>
                                {a < 50 ? <h1 style={{ color: "red" }}>a</h1> : null}
                                {a >= 75 ? <h1 style={{ color: "green" }}>a</h1> : null}
                                {a <= 75 && a >= 50 ? <h1 style={{ color: "yellow" }}>a</h1> : null}

                                {tenth <= 5 ? <div>*Your tenth marks are too low <br/></div> : null }
                                {(tenth >= 6) && (tenth < 8) ? <div>*Your tenth is descent.<br/></div> : null }
                                {tenth >= 8 ? '*Your tenth marks are good.' : null }

                                {twelth <= 5 ? <div>*Your twelth marks are too low</div> : null }
                                {(twelth >= 6) && (twelth < 8) ? <div>'*Your twelth is descent.</div> : null }
                                {twelth >= 8 ? <div>*Your twelth marks are good.</div> : null }

                                {btech <= 5 ? <div>*Your btech marks are too low <br/></div> : null }
                                {(btech >= 6) && (btech < 8) ? <div>*Your btech is descent.<br/></div> : null }
                                {btech >= 8 ? <div>*Your btech marks are good.</div> : null }

                                {wdev == 0 ? <div>*You need to learn web dev <br/></div> : null }
                                {wdev == 1  ? <div>*You are good to go in web dev.<br/></div> : null }

                                {ml == 0 ? <div>*You need to learn machine learning  <br/></div> : null }
                                {ml == 1  ? <div>*You are good to go in ml.<br/></div> : null }

                                {adev == 0 ? <div>*You need to learn android dev <br/></div> : null }
                                {adev == 1  ? <div>*You are good to go in android dev .<br/></div> : null }

                                {cs<= 5 ? <div>*Your communication skills are too low</div> : null }
                                {(cs >= 6) && (cs < 8) ? <div>'*Your communication skills are descent.</div> : null }
                                {cs >= 8 ? <div>*Your communication skills is good.</div> : null }

                                {int<= 1 ? <div>*Your internships are too low</div> : null }
                                {(int >= 2) && (int < 4) ? <div>'*Your internships are descent.</div> : null }
                                {int >= 5 ? <div>*Your internships are good.</div> : null }

                                {pr<= 1 ? <div>*Your Projects are too low</div> : null }
                                {(pr >= 2) && (pr < 4) ? <div>'*Your projects are descent.</div> : null }
                                {pr >= 5 ? <div>*Your projects are good.</div> : null }

                                {cp == 0 ? <div>*You need to learn competitive Coding <br/></div> : null }
                                {cp == 1  ? <div>*You are good to go in competitive Coding .<br/></div> : null }

                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Form>


        </>
    )
}

export default Predict;