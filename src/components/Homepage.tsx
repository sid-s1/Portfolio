import React, { useState } from "react";
import Header from "./Header";
import ContactMeForm from "./ContactMe";
import github from '../assets/homepage/github final.jpg';
import linkedin from '../assets/homepage/linkedin.svg';
import profile from '../assets/homepage/profile2.jpg';

interface HomepageProps {
    changeMainPage: (param: string) => void;
}

const Homepage: React.FC<HomepageProps> = ({changeMainPage}) => {
    const onNavbarClick = (param: string) => {
        changeMainPage(param);
        setShowContactMeForm(false);
    };
    const [showContactMeForm, setShowContactMeForm] = useState(false);
    const contactMeAction = () => setShowContactMeForm(true);
    return (
        <>
        <Header onNavbarClick={onNavbarClick}/>
        <div className="main-block">
            {
                showContactMeForm ? <ContactMeForm /> : 
                <>
                <div className="content">
                <div>
                    <p className='name'>SIDDHARTH SINGH</p>
                    <p className='title'>SOFTWARE ENGINEER</p>
                </div>
                <div className='profile-photo-block-mobile'>
                    <img src={profile} alt='profile-photo'className='profile-photo'/>
                    <div className="contact-me">Contact Me</div>
                </div>
                <div className="socials-links">
                    <a href="https://github.com/sid-s1?tab=repositories" target="blank">
                        <img src={github} alt="github-logo" className="link-icons github"/>
                    </a>
                    <a href="https://linkedin.com/in/s-iddharth-ingh1" target="blank">
                        <img src={linkedin} alt="linkedin-logo" className="link-icons linkedin"/>
                    </a>
                </div>
                </div>
                <div className='profile-photo-block'>
                    <img src={profile} alt='profile-photo'className='profile-photo'/>
                    <ul className="contact-me" onClick={contactMeAction}><li>Contact Me</li></ul>
                </div>
                </>
            }
        </div>
      </>
    )
};

export default Homepage;