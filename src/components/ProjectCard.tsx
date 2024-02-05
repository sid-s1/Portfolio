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
                    <h1>{project.name}</h1>
                    <img src={project.image} className="project-images"/>
                    <p>{project.desc}</p>
                    <ol>
                    {
                        project.tech.map(tech => {
                            return <li>
                                {tech}
                            </li>
                        })
                    }
                    </ol>
                </>
            }
        </div>
    )
};

export default ProjectCard;