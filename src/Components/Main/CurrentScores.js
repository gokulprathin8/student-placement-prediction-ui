import React, {useEffect} from "react";
import { Button, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import { connect } from "react-redux";
import {currentScores} from "../../redux/actions";

const CurrentScores = (props) => {
    useEffect(() => {
        props.currentScores();
    }, [])


    return (
        <>
            {props.currentScores.length > 0 ? props.currentScores.map((s) => {
                return(
                <Row>
                    <Col>
                        wrfj
                        <b>Tenth: {s.id}</b>
                    </Col>
                </Row>


                )
            }) : null}


        </>
    )
}

const mapStateToProps = (state) => {
    return { currentScores: state.scores.currentScoresList }
}

export default connect(mapStateToProps, {currentScores})(CurrentScores);
