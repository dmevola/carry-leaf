import React from 'react';
import headshot from '../../img/headshot.jpeg';

function About() {

    return(
        <section>
            <h1>Dan Evola</h1>
            <img src={headshot}/>
        </section>
    );
}

export default About;