import React from "react";
import Header from "./Header";
import "../App.css";

interface AboutProps {
    changeMainPage: (param: string) => void;
}

const About: React.FC<AboutProps> = ({changeMainPage}) => {
    const onNavbarClick = (param: string) => changeMainPage(param);
    return (
    <>
        <Header onNavbarClick={onNavbarClick} selectedPage={"About"}/>
        <div className="main-block">

        </div>
    </>
    )
};

export default About;