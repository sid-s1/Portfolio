import React, { useState } from "react";
import "../ContactMe.css";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import SubmittedFormView from "./SubmittedFormView";

const ContactMeForm:React.FC = () => {
    const form = React.useRef<HTMLFormElement>(null);
    const nameRef = React.useRef<HTMLInputElement>(null);
    const emailRef = React.useRef<HTMLInputElement>(null);
    const [formSubmitted,setFormSubmitted] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.current === null) return;

        emailjs
        .sendForm('contact_service', 'contact_form', form.current,{
            publicKey: "Lu6mHEFlS2mVjeU-W",
        })
        .then(response => setFormSubmitted(true))
        .catch(error => {
            alert(`Please address - ${error.text}`);
        })
    };

    return <div className="contact-me-form-container">
        {formSubmitted ? <SubmittedFormView /> : 
        <form ref={form} onSubmit={sendEmail}>
            <h2 className="contact-header">Contact Me</h2>
            <input type="text" name="user_name" ref={nameRef} placeholder="Your Name" className="contact-form-inputs" required/>
            <input type="email" name="user_email" ref={emailRef} placeholder="Your Email" className="contact-form-inputs" required/>
            <textarea name="message" placeholder="Type your message.." className="contact-form-inputs" required/>
            <ReCAPTCHA sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY as string} />
            <input type="submit" value="Send" className="contact-form-submit-btn"/>
        </form>}
    </div>
};

export default ContactMeForm;