import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "react-bootstrap/cjs/Container";

const HeaderFooter = ({children}) => {
    return (
        <>
            <Container >
                <Header/>
                {children}
                <Footer/>
            </Container>
        </>
    )
}

export default HeaderFooter;
