import React from "react";
import "../Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import HTMLLogo from "../assets/tech logos/html.jpg";
import CSSLogo from "../assets/tech logos/css.webp";
import JSLogo from "../assets/tech logos/JavaScript-logo.png";
import PYLogo from "../assets/tech logos/python.png";
import FlaskLogo from "../assets/tech logos/flask.jpg";
import PostgresLogo from "../assets/tech logos/Postgresql_elephant.svg.png";
import NodeLogo from "../assets/tech logos/node.jpeg";
import ReactLogo from "../assets/tech logos/react.png";

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

type ProjectObject = {
    "name": string,
    "projectLogo": string,
    "desc": string,
    "tech": (keyof typeof logoMapping)[],
    "date": string
}

interface ProjectCardProps {
    project: ProjectObject
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
    return (
        <div className="project-card">
            {   
            <>
                <div className="project-card-content">
                    <img src={project.projectLogo} className="project-logos"/>
                </div>
                <div className="project-card-content projectName-and-link">
                    <h1 className="project-names">{project.name}</h1>
                    <FontAwesomeIcon icon={faLink} />
                </div>
                <div className="project-card-content">
                    <p className="project-descriptions"><strong><em>Description: </em></strong>{project.desc}</p>
                </div>
                <div className="project-card-content project-date-container">
                    <p className="project-descriptions project-dates">{project.date}</p>
                </div>
                <div className="project-card-content tech-used">
                    <>
                        {
                            project.tech.map(tech => <img key={tech} src={logoMapping[tech]} className="tech-logos"/>)
                        }
                    </>
                </div>
            </>
            }
        </div>
    )
};

export default ProjectCard;