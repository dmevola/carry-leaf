import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
// import Navbar from 'react-bootstrap/Navbar';
// import { Container } from 'react-bootstrap';


function Nav() {

    return(
        <header className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
            <ul className='h4 text-info'>
                Dan Evola
            </ul>
            <li>
            <Link to="/">About</Link>
            </li>
            <li>
            <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
            <Link to="/resume">Resume</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
        </header>

    );
}

export default Nav;