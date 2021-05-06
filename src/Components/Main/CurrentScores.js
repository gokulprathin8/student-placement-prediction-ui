import React, { useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { currentScores } from "../../redux/actions";
import CustomLineChart from "../../charts/CustomLineChart";

const CurrentScores = (props) => {
  useEffect(() => {
    props.currentScores();
  }, []);

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>Viewing Scores</h2>
      </div>
      <div style={{ padding: "20px" }}></div>
      {props.scores.length > 0
        ? props.scores.map((d) => {
            return (
              <Form>
                <Row>
                  <Col>
                    <Form.Group controlId="formTenthMarks">
                      <Form.Label>Tenth Marks</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={d.tenth}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formTwelthMarks">
                      <Form.Label>Twelth Marks</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={d.twelth}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBtechMarks">
                      <Form.Label>Btech Marks</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={d.btech}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="formWebDevelopment">
                      <Form.Label>Web Development</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={d.webDevelopment.toString() ? "YES" : "NO"}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formMachinelearning">
                      <Form.Label>Machine learning</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={
                          d.machineLearning.toString() ? "YES" : "NO"
                        }
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formAndroiddevelopment">
                      <Form.Label>Android development</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={
                          d.androidDevelopment.toString() ? "YES" : "NO"
                        }
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="formCommunicationSkills">
                      <Form.Label>Communication Skills</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={d.communicationSkills}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formInternship">
                      <Form.Label>Internship</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={d.internship}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formProjects">
                      <Form.Label>Projects</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={d.projects}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} md={4}>
                    <Form.Group controlId="formCompetitiveCoding">
                      <Form.Label>Competitive Coding</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={
                          d.competitiveCoding.toString() ? "YES" : "NO"
                        }
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div style={{ padding: "20px" }}></div>
                <div>
                  <h2 style={{ textAlign: "center" }}>
                    In comparasion with other students
                  </h2>
                </div>
                <div style={{ padding: "20px" }}></div>
                <CustomLineChart />
              </Form>
            );
          })
        : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return { scores: state.scores.currentScoresList };
};

export default connect(mapStateToProps, { currentScores })(CurrentScores);
