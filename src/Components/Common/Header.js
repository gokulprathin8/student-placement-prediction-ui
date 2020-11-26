import React from "react";
import Navbar from "react-bootstrap/cjs/Navbar";

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://upload.wikimedia.org/wikipedia/en/0/02/Pics_gitam_tee.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    GITAM TnP Portal
                </Navbar.Brand>
                <div>

                </div>
            </Navbar>
        </>
    )
}

export default Header;
