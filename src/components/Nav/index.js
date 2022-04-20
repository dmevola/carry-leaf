import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Nav(props) {
    return(
        <header>
        <h2>
          <a href="/"> Dan Evola 
          </a>
        </h2>
        <Navbar>
          <ul className="flex-row">
            <li className="mx-2">
              <a href="#about">
                About me
              </a>
            </li>
            <li className="mx-2">
              <a href="#contact">
                Contact
              </a>
            </li>
            <li className="mx-2">
              <a href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="mx-2">
              <a href="#resume">
                Resume
              </a>
            </li>
          </ul>
        </Navbar>
      </header>
    );
}

export default Nav;