import React from "react";
import Header from "./Header";

interface ProjectsProps {
    changeMainPage: (param: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({changeMainPage}) => {
    const onNavbarClick = (param: string) => changeMainPage(param);
    return (
        <>
            <Header onNavbarClick={onNavbarClick}/>
            <h1>PROJECTS</h1>
        </>
    )
};

export default Projects;