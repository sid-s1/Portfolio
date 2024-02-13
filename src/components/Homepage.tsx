import React from "react";
import Header from "./Header";
import github from '../assets/homepage/github final.jpg';
import linkedin from '../assets/homepage/linkedin.svg';
import profile from '../assets/homepage/profile2.jpg';

interface HomepageProps {
    changeMainPage: (param: string) => void;
}

const Homepage: React.FC<HomepageProps> = ({changeMainPage}) => {
    const onNavbarClick = (param: string) => changeMainPage(param);
    return (
        <>
        <Header onNavbarClick={onNavbarClick}/>
        <div className="main-block">
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
                <img src={github} alt="github-logo" className="link-icons github"/>
                <img src={linkedin} alt="linkedin-logo" className="link-icons linkedin"/>
            </div>
            </div>
            <div className='profile-photo-block'>
                <img src={profile} alt='profile-photo'className='profile-photo'/>
                <ul className="contact-me"><li>Contact Me</li></ul>
            </div>
        </div>
      </>
    )
};

export default Homepage;