import React from "react";
import Header from "./Header";
import Wordle from "../Wordle screenshot.png";
import ShoppingList from "../Shopping list screenshot.png";
import Tript from "../Tript screenshot.png";
import Appminder from "../Appminder screenshot.png";
import ProjectCard from "./ProjectCard";
import "../Projects.css";

interface ProjectsProps {
    changeMainPage: (param: string) => void;
}

interface ProjectObject {
    "name": string,
    "image": string,
    "desc": string,
    "tech": string[]
}

const Projects: React.FC<ProjectsProps> = ({changeMainPage}) => {
    const onNavbarClick = (param: string) => changeMainPage(param);
    const projects: ProjectObject[] = [
        {
            "name": "Wordle",
            "image": Wordle,
            "desc": "A twist on the NY Times Wordle that allows as many turns as players desire, and lets them build up their score; while also allowing them two more word-choices when they are close to the end of their attempts.",
            "tech": ["HTML", "CSS", "JS"]
        },
        {
            "name": "Shopping List",
            "image": ShoppingList,
            "desc": "An app to create a shopping list using stores in the real-world (using Google Maps API) and to generate the shortest route between user's home address and all the stores on their list.",
            "tech": ["HTML", "CSS", "JS", "Python", "Flask", "Jinja2", "PostgreSQL", "Google APIs (Autocomplete, Geocoding, Details, Directions)"]
        },
        {
            "name": "Tript",
            "image": Tript,
            "desc": "A digital travel diary, allowing users to save details of all their favourite trips, activities & hotels. They can also search trips posted by other users allowing them to find new and exciting places to go. Our team of 3 used Github Projects to create project timeline and break the tasks into tickets.",
            "tech": ["HTML", "CSS", "JS", "NodeJS", "Express", "PostgreSQL", "Google APIs (Autocomplete, Geocoding, Details, Directions)"]
        },
        {
            "name": "Appminder",
            "image": Appminder,
            "desc": "A React/NodeJS app that helps a job applicant organise the details of their applications throughout the recruitment process. They can sort their applications across the four stages of Draft, Applied, Interviewing and Awaiting.",
            "tech": ["React", "ReactDND", "CSS", "NodeJS", "Express", "PostgreSQL"]
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