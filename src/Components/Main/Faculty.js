import React, {useEffect} from "react";
import {Button, Card, Row, Col} from "react-bootstrap";
import {connect} from "react-redux";
import {fetchFaculty} from "../../redux/actions";

const Faculty = (props) => {
    useEffect((props) => {
        props.fetchFaculty();
    }, [])

    return (
        <div style={{ textAlign: "center" }}>
            <Row>
                {props.staff.length > 0 ? props.staff.map((f) => {
                    return (

                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={f.photo}/>
                            <Card.Body>
                                <Card.Title>{f.name}</Card.Title>
                                <hr/>
                                <Card.Text>
                                    <p>Subject: {f.subject}</p>
                                   <p>Ph. No: {f.contact_phone_number}</p>
                                    {f.department} <br/>
                                </Card.Text>
                                <Button href={f.contact_email_id}>Contact {f.name}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                }) :null}


            </Row>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {staff: state.staff.facultyList};
}

export default connect(mapStateToProps, {fetchFaculty})(Faculty);