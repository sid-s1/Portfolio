import React from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import "../Projects.css";

import WordleLogo from "../assets/app logos/worlde.webp";
import ShoppingListLogo from "../assets/app logos/shopping.png";
import TriptLogo from "../assets/app logos/aeroplane.jpg";
import AppminderLogo from "../assets/app logos/Appminder.png";

import HTMLLogo from "../assets/tech logos/html.jpg";
import CSSLogo from "../assets/tech logos/css.webp";
import JSLogo from "../assets/tech logos/JavaScript-logo.png";
import PYLogo from "../assets/tech logos/python.png";
import FlaskLogo from "../assets/tech logos/flask.jpg";
import PostgresLogo from "../assets/tech logos/Postgresql_elephant.svg.png";
import NodeLogo from "../assets/tech logos/node.jpeg";
import ReactLogo from "../assets/tech logos/react.png";

interface ProjectsProps {
    changeMainPage: (param: string) => void;
}

const logoMapping = {
    "html": HTMLLogo,
    "css": CSSLogo,
    "js": JSLogo,
    "python": PYLogo,
    "flask": FlaskLogo,
    "postgres": PostgresLogo,
    "node": NodeLogo,
    "react": ReactLogo
};

interface ProjectObject {
    "name": string,
    "projectLogo": string,
    "desc": string,
    "tech": (keyof typeof logoMapping)[],
    "date": string
}

const Projects: React.FC<ProjectsProps> = ({changeMainPage}) => {
    const onNavbarClick = (param: string) => changeMainPage(param);
    const projects: ProjectObject[] = [
        {
            "name": "Wordle",
            "projectLogo": WordleLogo,
            "desc": "A twist on the NY Times Wordle that allows as many turns as players desire, and lets them build up their score; while also allowing them two more word-choices when they are close to the end of their attempts.",
            "tech": ["html", "css", "js"],
            "date": "June 2022"
        },
        {
            "name": "Shopping List",
            "projectLogo": ShoppingListLogo,
            "desc": "An app to create a shopping list using stores in the real-world (using Google Maps API) and to generate the shortest route between user's home address and all the stores on their list.",
            "tech": ["html", "css", "js", "python", "flask", "postgres"],
            "date": "July 2022"
        },
        {
            "name": "Tript",
            "projectLogo": TriptLogo,
            "desc": "A digital travel diary, allowing users to save details of all their favourite trips, activities & hotels. They can also search trips posted by other users allowing them to find new and exciting places to go. Our team of 3 used Github Projects to create project timeline and break the tasks into tickets.",
            "tech": ["html", "css", "js", "node", "postgres"],
            "date": "September 2022"
        },
        {
            "name": "Appminder",
            "projectLogo": AppminderLogo,
            "desc": "A React/NodeJS app that helps a job applicant organise the details of their applications throughout the recruitment process. They can sort their applications across the four stages of Draft, Applied, Interviewing and Awaiting.",
            "tech": ["react", "css", "node", "postgres"],
            "date": "November 2022"
        },
    ];
    return (
        <>
            <Header onNavbarClick={onNavbarClick}/>
            <div className="project-list">
                {
                    projects.map(project => <ProjectCard project={project}/>)
                }
            </div>
        </>
    )
};

export default Projects;