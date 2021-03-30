import React, {useEffect} from "react";
import {Button, Card, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {fetchLearningResources} from "../../redux/actions";

const LearningResources = (props) => {
    useEffect(() => {
        props.fetchLearningResources();
    }, []);

    return (
        <>
            <Row>
                {props.learningResources.length > 0 ?
                    props.learningResources.map((r) => {
                        return (
                            <div style={{ padding: "10px", textAlign:"center" }}>
                                <Card style={{width: '18rem'}}>
                                    <Card.Body>
                                        <Card.Title>{r.subject} - Material</Card.Title>
                                        <Card.Text>
                                            {r.description}
                                        </Card.Text>
                                        <Button href={r.document}>{r.title}</Button>
                                    </Card.Body>
                                </Card>
                                <div style={{padding: "20px"}}></div>
                            </div>
                        )
                    })
                    : null}
            </Row>
        </>
    )
}

const mapStateToProps = (state) => {
    return {learningResources: state.learningResources.learningList};
}

export default connect(mapStateToProps, {fetchLearningResources})(LearningResources);