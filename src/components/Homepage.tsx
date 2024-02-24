import React, { useState } from "react";
import Header from "./Header";
import ContactMeForm from "./ContactMe";
import github from '../assets/homepage/github final.jpg';
import linkedin from '../assets/homepage/linkedin.svg';
import profile from '../assets/homepage/profile2.jpg';
import Resume from "../documents/Siddharth Singh - Software Engineer.pdf";

import HTMLLogo from "../assets/tech logos/html.svg";
import CSSLogo from "../assets/tech logos/css.webp";
import JSLogo from "../assets/tech logos/JavaScript-logo.png";
import PYLogo from "../assets/tech logos/python.png";
import FlaskLogo from "../assets/tech logos/flask.jpg";
import PostgresLogo from "../assets/tech logos/Postgresql_elephant.svg.png";
import NodeLogo from "../assets/tech logos/nodejs-2.svg";
import ReactLogo from "../assets/tech logos/react.svg";
import TSLogo from "../assets/tech logos/ts-logo-128.svg";
import JestLogo from "../assets/tech logos/jest-logo-png-transparent.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    const techSkills = [
    <p className="tech-skills-homepage">React <img className="tech-logos-homepage" src={ReactLogo} /></p>,
    <p className="tech-skills-homepage">Node <img className="tech-logos-homepage" src={NodeLogo} /></p>,
    <p className="tech-skills-homepage">HTML <img className="tech-logos-homepage" src={HTMLLogo} />, CSS <img className="tech-logos-homepage" src={CSSLogo} />, JS <img className="tech-logos-homepage" src={JSLogo} /></p>,
    <p className="tech-skills-homepage">PostgreSQL <img className="tech-logos-homepage" src={PostgresLogo} /></p>,
    <p className="tech-skills-homepage">Python <img className="tech-logos-homepage" src={PYLogo} />, Flask <img className="tech-logos-homepage" src={FlaskLogo} /></p>,
    <p className="tech-skills-homepage">Jest <img className="tech-logos-homepage" src={JestLogo} /></p>,
    <p className="tech-skills-homepage">Typescript <img className="tech-logos-homepage" src={TSLogo} /></p>,
];
    const keySkills = [
        "Teamwork and Collaboration 🤝",
        "Problem-Solving 🤔",
        "Time Management and Prioritization 💆🏻‍♂️",
        "Attention to Detail 🧐",
        "Initiative and Proactiveness 💡",
        "Leadership 🌟"
    ];

    const [showIntroContent,setShowIntroContent] = useState("homepage-intro-content");

    // from MUI documentation
    const [expandedAccordion, setExpandedAccordion] = useState<string | false>("");
    
    // from MUI documentation
    const handleChangeOfAccordion = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpandedAccordion(newExpanded ? panel : false);
        setShowIntroContent(newExpanded ? "homepage-intro-content hidden" : "homepage-intro-content");
    };

    return (
        <>
        <Header onNavbarClick={onNavbarClick}/>
        <div className="main-block">
            {
                showContactMeForm ? <ContactMeForm /> : 
                <>
                <div className="content">
                <div className="homepage-intro">
                    <div className={showIntroContent}>
                        <p>Hello! 🙋🏻‍♂️ I'm Siddharth </p>
                        <p>I go by Software Engineer 👨🏻‍💻, but you can also call me Sid!</p>
                        <p>Over the years, in university 🎓 and then in workplaces 👨🏻‍💼, I have learned invaluable lessons about working in teams, collaboratively towards shared goals</p>
                    </div>
                    <Accordion expanded={expandedAccordion === 'panel1'} onChange={handleChangeOfAccordion('panel1')} className="accordions" disableGutters style={{backgroundColor: "black"}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: "white"}}/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        style={{backgroundColor: "black",color: "white",minHeight: 50, maxHeight: 50}}
                        >
                        <Typography className="accordion-text"><p className="accordion-text">🔑 Key Skills</p></Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{backgroundColor: "black",color: "white"}}>
                            <Typography className="accordion-text">
                                <ul className="skill-lists">
                                    {
                                        keySkills.map(skill => <li className="accordion-text">{skill}</li>)
                                    }
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expandedAccordion === 'panel2'} onChange={handleChangeOfAccordion('panel2')} className="accordions" disableGutters style={{backgroundColor: "black"}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: "white"}}/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        style={{backgroundColor: "black",color: "white",minHeight: 50, maxHeight: 50}}
                        >
                        <Typography><p className="accordion-text">🚀 Engineering Skills</p></Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{backgroundColor: "black",color: "white"}}>
                            <Typography>
                                <ul className="skill-lists">
                                    {
                                        techSkills.map((skill,i) => <li className="accordion-text">{skill}</li>)
                                    }
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <ul className="contact-me intro-contact" onClick={contactMeAction}><li>Contact Me</li></ul>
                    <p className="mobile-view-resume">Download my resume <a href={Resume} target="_blank" style={{textDecoration: "underline"}}>here</a></p>
                </div>
                <div className='profile-photo-block-mobile'>
                    <img src={profile} alt='profile-photo'className='profile-photo'/>
                    <p>Download my resume <a href={Resume} target="_blank" style={{textDecoration: "underline"}}>here</a></p>
                </div>
                </div>
                <div className='profile-photo-block'>
                    <img src={profile} alt='profile-photo'className='profile-photo'/>
                    <ul className="contact-me" onClick={contactMeAction}><li>Contact Me</li></ul>
                    <div className="socials-links">
                        <a href="https://github.com/sid-s1?tab=repositories" target="blank">
                            <img src={github} alt="github-logo" className="link-icons github"/>
                        </a>
                        <a href="https://linkedin.com/in/s-iddharth-ingh1" target="blank">
                            <img src={linkedin} alt="linkedin-logo" className="link-icons linkedin"/>
                        </a>
                    </div>
                </div>
                </>
            }
        </div>
      </>
    )
};

export default Homepage;