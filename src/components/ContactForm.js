import React, { useRef } from 'react';
import './ContactFormStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import cartoon from '../images/study.png';

export default function ContactForm({ id }) {
    const form = useRef();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                toast.success('Message sent successfully.', {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "dark",
                });
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                toast.error("Failed to send message. Please try again.", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "dark",
                });
            });
    };

    return (
        <div className='contact-window' id={id}>
            <h1>Got an idea? Let's turn it into reality. </h1>
            <p>I'm always open to discussing new projects and opportunities. Let's connect.</p>
            <div className="contact-container">
                <img src={cartoon} alt='Nisha Yadav' className="contact-wrapper-left"></img>
                <form ref={form} onSubmit={sendEmail} className="contact-wrapper-right">
                    <input id='name' type="text" name="name" placeholder='Full Name' required />
                    <input id='email' type="email" name="email" placeholder='Email ID' required />
                    <textarea id='message' name="message" rows='5' placeholder='Have a project or idea? I’d love to hear from you.' required/>
                    <button className='btn' id='submitBtn' type="submit" value="Send" >Send Message</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}

