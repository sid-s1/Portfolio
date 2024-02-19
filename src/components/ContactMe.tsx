import React, { useState } from "react";
import "../ContactMe.css";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import SubmittedFormView from "./SubmittedFormView";

const ContactMeForm:React.FC = () => {
    const form = React.useRef<HTMLFormElement>(null);
    const nameRef = React.useRef<HTMLInputElement>(null);
    const emailRef = React.useRef<HTMLInputElement>(null);
    const [captchaNotEntered,setCaptchaNotEntered] = useState("");
    const [notifyUserToEnterRecaptcha,setNotifyUserToEnterRecaptcha] = useState("recaptcha-container");
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
            console.log(error);
            setCaptchaNotEntered("Please check the Captcha box so I can make sure you are not a robot ;)")
            setNotifyUserToEnterRecaptcha("recaptcha-container activate")
            // alert('Please check the Captcha box so I can make sure you are not a robot ;)');
        })
    };

    return <div className="contact-me-form-container">
        {formSubmitted ? <SubmittedFormView /> : 
        <form ref={form} onSubmit={sendEmail}>
            <h2 className="contact-header">Contact Me</h2>
            <input type="text" name="user_name" ref={nameRef} placeholder="Your Name" className="contact-form-inputs" required/>
            <input type="email" name="user_email" ref={emailRef} placeholder="Your Email" className="contact-form-inputs" required/>
            <textarea name="message" placeholder="Type your message.." className="contact-form-inputs" required/>
            {
                captchaNotEntered.length > 0 ? <div className="captcha-error-message">{captchaNotEntered}</div> : <></>
            }
            <div className={notifyUserToEnterRecaptcha}>
                <ReCAPTCHA onChange={() => {
                    setCaptchaNotEntered("");
                    setNotifyUserToEnterRecaptcha("recaptcha-container");
                    }} theme="dark" sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY as string} />
            </div>
            <input type="submit" value="Send" className="contact-form-submit-btn"/>
        </form>}
    </div>
};

export default ContactMeForm;