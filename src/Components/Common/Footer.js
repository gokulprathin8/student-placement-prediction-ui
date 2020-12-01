import React from "react";
import Col from "react-bootstrap/cjs/Col";
import Row from "react-bootstrap/cjs/Row";

const Footer = () => {
    return (
        <>
            <div style={{ width: "100%", backgroundColor: "#343A40", color: "white", padding: "10px" }}>
                <Row>
                    <Col xs={10} md={10} >
                        <h5>GITAM TnP</h5>
                    </Col>
                    <Col>
                        Powered by TEAM D-05
                    </Col>

                </Row>
            </div>
        </>
    )
}

export default Footer;
