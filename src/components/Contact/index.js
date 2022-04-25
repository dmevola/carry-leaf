import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function ContactForm() {
const [formState, setFormState] = useState({ name: '', email: '', message: ''});
const { name, email, message } = formState;

function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value })
}

function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
}

    return(
        <section>
            <div className='container'>
                <div className='row'>
            <h1 className='top-text text-center w-responsive mx-auto mb-5'>
                Contact Me
            </h1>
            <p className='text-center w-responsive mx-auto mb-5'>Want to connect? Fill out the form below and I will get back in touch ASAP.</p>
            <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                 <label htmlFor="name">Name:</label>
                 <input type="text" defaultValue={name} name="name" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                 <input type="email" defaultValue={email} name="email" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue= {message} rows="5" onChange={handleChange} />
            </div>
            <Button type="submit">Submit</Button>
            </form>
            </div>
            </div>
        </section>
    )
}

export default ContactForm;
