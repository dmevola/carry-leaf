import React from 'react';
import headshot from '../../img/headshot.jpeg';
import '../../App.css';


function About() {

    return(
        <div className='container'>
           <div className='row'>
               <div className='col-12 col-md-4 col-lg-4 mt-10'>
                    <h1 className='top-text'>Dan Evola</h1>
                    <img src={headshot} className='w-75 m-5 border img-border border-info' alt='dan evola'/>
            </div>
            <div className='col-12 col-md-8 col-lg-8'>
                <h2 className='top-text'>
                    This Guy Devs
                </h2>
                <p>
                    Dan Evola is a creative technologist and a servant leader. He currently leads a full stack Software Engineering team at Rocket Mortgage. He has over 10 years of experience in web design and development.
                    <br></br>
                    <br></br>
                    Dan is an expert project manager who has led complex initiatives from conception to execution at an enterprise scale. 
                    
                </p>
            </div>
            </div>
        </div>
    );
}

export default About;