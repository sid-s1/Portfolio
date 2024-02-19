import React from "react";
import "../Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

import HTMLLogo from "../assets/tech logos/html.svg";
import CSSLogo from "../assets/tech logos/css.webp";
import JSLogo from "../assets/tech logos/JavaScript-logo.png";
import PYLogo from "../assets/tech logos/python.png";
import FlaskLogo from "../assets/tech logos/flask.jpg";
import PostgresLogo from "../assets/tech logos/Postgresql_elephant.svg.png";
import NodeLogo from "../assets/tech logos/nodejs-2.svg";
import ReactLogo from "../assets/tech logos/react.svg";
import TSLogo from "../assets/tech logos/ts-logo-128.svg";

const logoMapping = {
    "html": HTMLLogo,
    "css": CSSLogo,
    "js": JSLogo,
    "python": PYLogo,
    "flask": FlaskLogo,
    "postgres": PostgresLogo,
    "node": NodeLogo,
    "react": ReactLogo,
    "typescript": TSLogo
};

type ProjectObject = {
    "name": string,
    "projectLogo": string,
    "desc": string,
    "tech": (keyof typeof logoMapping)[],
    "date": string,
    "type": string,
    "link": string,
    "github": string,
    "tags": string[]
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
                    <Tooltip TransitionComponent={Zoom} title={project.name}>
                        <a href={project.link} target="blank"><FontAwesomeIcon icon={faLink} className="project-link"/></a>
                    </Tooltip>
                </div>
                <div className="desc-date-container">
                    <div className="project-card-content">
                        <p className="project-descriptions"><strong><em>Description: </em></strong>{project.desc}</p>
                    </div>
                    <div className="project-card-content project-date-container">
                        <p className="project-descriptions project-dates">{project.type}</p>
                        <Tooltip title="Github">
                            <a href={project.github} target="blank"><FontAwesomeIcon icon={faGithubAlt} className="github-logos"/></a>
                        </Tooltip>
                    </div>
                </div>
                <div className="project-card-content tech-used">
                    <>
                        {
                            project.tech.map(tech => {
                                return <Tooltip style={{backgroundColor: "black"}} TransitionComponent={Zoom} title = {tech[0].toUpperCase()+tech.slice(1)} className="tooltips">
                                    <img key={tech} src={logoMapping[tech]} className="tech-logos"/>
                                </Tooltip>
                        })
                        }
                    </>
                </div>
            </>
            }
        </div>
    )
};

export default ProjectCard;