import React from "react";
import Navbar from "react-bootstrap/cjs/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
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
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <a href="#login"><Link to="/login">Login</Link></a>
                </Navbar.Text>
            </Navbar.Collapse>
                <div>
                    
                </div>
            </Navbar>
        </div>
    )
}

export default Header;
