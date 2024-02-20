import React from "react";
import Header from "./Header";
import Resume from "../documents/Siddharth Singh - Software Engineer.pdf";

interface AboutProps {
    changeMainPage: (param: string) => void;
}

const About: React.FC<AboutProps> = ({changeMainPage}) => {
    const onNavbarClick = (param: string) => changeMainPage(param);
    return (
    <>
        <Header onNavbarClick={onNavbarClick}/>
        <h1>ABOUT</h1>
        <a href={Resume} target="_blank">Download my resume</a>
    </>
    )
};

export default About;