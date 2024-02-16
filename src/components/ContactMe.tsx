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
            <label>Name</label>
            <input type="text" name="user_name" ref={nameRef}/>
            <label>Email</label>
            <input type="email" name="user_email" ref={emailRef}/>
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
            <ReCAPTCHA sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY as string} />
        </form>}
    </div>
};

export default ContactMeForm;