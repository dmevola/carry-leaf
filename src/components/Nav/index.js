import React from 'react';
import { Link } from "react-router-dom";
import ContactForm from '../Contact';

function Nav() {

    return(
        <div>
            <li>
                <Link to="/">About</Link>
            </li>
            {/* <li>
            <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
            <Link to="/resume">Resume</Link>
            </li> */}
            <li>
            <Link to="/contact">Contact</Link>
            </li>
        </div>
    );
}

export default Nav;