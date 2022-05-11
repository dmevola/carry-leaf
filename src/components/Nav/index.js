import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import {Link} from 'react-router-dom';


function Navigation(props) {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="">Dan Evola</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id ="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link to="/">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Navigation;