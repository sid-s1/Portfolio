import React from "react";
import Header from "./Header";

interface AboutProps {
    changeMainPage: (param: string) => void;
}

const About: React.FC<AboutProps> = ({changeMainPage}) => {
    const onNavbarClick = (param: string) => changeMainPage(param);
    return (
    <>
        <Header onNavbarClick={onNavbarClick}/>
        <h1>ABOUT</h1>
    </>
    )
};

export default About;