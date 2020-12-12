import React from "react";
import HeaderLogout from "./HeaderLogout";
import Footer from "./Footer";
import Container from "react-bootstrap/cjs/Container";

const CommonOut = ({children}, props) => {
    return (
        <>
            <Container >
                <HeaderLogout/>
                {children }
                <Footer/>
            </Container>
        </>
    )
}

export default CommonOut;
