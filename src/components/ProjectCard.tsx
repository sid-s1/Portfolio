import React from "react";
import "../Projects.css";

type ProjectObject = {
    "name": string,
    "image": string,
    "desc": string,
    "tech": string[]
}

interface ProjectCardProps {
    project: ProjectObject
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
    return (
        <div className="project-card">
            {   
                <>
                    <h1 className="project-names">{project.name}</h1>
                    <img src={project.image} className="project-images"/>
                    <p className="project-descriptions">{project.desc}</p>
                    <p className="tech-used">
                        {
                            project.tech.map((tech,index) => index < project.tech.length - 1 ? `${tech} + ` : `${tech}`)
                        }
                    </p>
                </>
            }
        </div>
    )
};

export default ProjectCard;