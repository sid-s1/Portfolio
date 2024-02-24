import React, { useState } from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import LanguageFilter from "./LanguageFilter";
import "../Projects.css";

import WordleLogo from "../assets/app logos/worlde.webp";
import ShoppingListLogo from "../assets/app logos/shop4.png";
import TriptLogo from "../assets/app logos/vacation.png";
import AppminderLogo from "../assets/app logos/Appminder.png";
import PortfolioLogo from "../assets/app logos/portfolio3.png";

import HTMLLogo from "../assets/tech logos/html.svg";
import CSSLogo from "../assets/tech logos/css.webp";
import JSLogo from "../assets/tech logos/JavaScript-logo.png";
import PYLogo from "../assets/tech logos/python.png";
import FlaskLogo from "../assets/tech logos/flask.jpg";
import PostgresLogo from "../assets/tech logos/Postgresql_elephant.svg.png";
import NodeLogo from "../assets/tech logos/nodejs-2.svg";
import ReactLogo from "../assets/tech logos/react.svg";
import TSLogo from "../assets/tech logos/ts-logo-128.svg";

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
    "react": ReactLogo,
    "typescript": TSLogo
};

interface ProjectObject {
    "name": string,
    "projectLogo": string,
    "desc": string,
    "tech": (keyof typeof logoMapping)[],
    "date": string,
    "type": string
    "link": string,
    "github": string,
    "tags": string[]
}

const Projects: React.FC<ProjectsProps> = ({changeMainPage}) => {
    const onNavbarClick = (param: string) => changeMainPage(param);
    const [searchItem, setSearchItem] = useState("");

    const searchTestingWithoutImages = (searchParameter: string, mainString: string) => {
        const regEx = new RegExp(searchParameter, "i");
        if (mainString.includes("image") === false) {
            return regEx.test(mainString);
        }
        return false;
    };

    const projects: ProjectObject[] = [
        {
            "name": "Wordle",
            "projectLogo": WordleLogo,
            "desc": "A twist on the NY Times Wordle that allows as many turns as players desire, and lets them build up their score; while also allowing them two more word-choices when they are close to the end of their attempts.",
            "tech": ["html", "css", "js"],
            "date": "June 2022",
            "type": "Personal",
            "link": "https://sid-s1.github.io/Project-1/",
            "github": "https://github.com/sid-s1/Project-1",
            "tags": ["javascript","new york times"]
        },
        {
            "name": "Shopping List",
            "projectLogo": ShoppingListLogo,
            "desc": "An app to create a shopping list using stores in the real-world (using Google Maps API) and to generate the shortest route between user's home address and all the stores on their list.",
            "tech": ["html", "css", "js", "python", "flask", "postgres"],
            "date": "July 2022",
            "type": "Personal",
            "link": "https://radiant-retreat-54789.herokuapp.com/",
            "github": "https://github.com/sid-s1/Project-2",
            "tags": ["javascript","sql","database","db"]
        },
        {
            "name": "Tript",
            "projectLogo": TriptLogo,
            "desc": "A digital travel diary, allowing users to save details of all their favourite trips, activities & hotels. They can also search trips posted by other users allowing them to find new and exciting places to go. Our team of 3 used Github Projects to create project timeline and break the tasks into tickets.",
            "tech": ["html", "css", "js", "node", "postgres"],
            "date": "September 2022",
            "type": "Pair",
            "link": "https://ga-tript.herokuapp.com/",
            "github": "https://github.com/sid-s1/Travel-App",
            "tags": ["javascript","sql","database","db"]
        },
        {
            "name": "Appminder",
            "projectLogo": AppminderLogo,
            "desc": "A React/NodeJS app that helps a job applicant organise the details of their applications throughout the recruitment process. They can sort their applications across the four stages of Draft, Applied, Interviewing and Awaiting.",
            "tech": ["react", "css", "node", "postgres"],
            "date": "November 2022",
            "type": "Pair",
            "link": "https://appminder.herokuapp.com/",
            "github": "https://github.com/itsnotalvin/appminder",
            "tags": ["sql","database","db"]
        },
        {
            "name": "This Portfolio",
            "projectLogo": PortfolioLogo,
            "desc": "A React/Typescript app that showcases my projects, and provides a short introduction to me. Functionality includes the ability to use filters to fetch certain projects, or a search bar to search using project information or tags. Responsive design to make it mobile-friendly. Allows website visitor to reach out to me using a contact form.",
            "tech": ["react", "css", "typescript"],
            "date": "November 2022",
            "type": "Personal",
            "link": "thesiddharthsingh.com",
            "github": "https://github.com/sid-s1/Portfolio",
            "tags": ["ts","react"]
        },
    ];

    const languageFilters = ["All","React","Node","Javascript","SQL","Typescript"];
    const [selectedFilter,setSelectedFilter] = useState("All");
    const clickLanguageFilterAction = (filter: string) => setSelectedFilter(filter);

    const filtering = (obj: ProjectObject) => {
        if (selectedFilter === "All") return true;
        return obj.tech.some(tech => new RegExp(selectedFilter,"i").test(tech)) || obj.tags.some(tag => new RegExp(selectedFilter,"i").test(tag));
    };

    return (
        <>
            <Header onNavbarClick={onNavbarClick} selectedPage="Projects"/>
            <input type="text" className="project-search-field" placeholder="Search projects..." value={searchItem} onChange={(e) => setSearchItem(e.target.value)}/>
            <div className="language-filters">
                {
                    languageFilters.map(filter => <LanguageFilter filter={filter} clickLanguageFilter={clickLanguageFilterAction} selectedFilter={selectedFilter}/>)
                }
            </div>
            <div className="project-list">
                {
                    projects
                    .filter(project => filtering(project))
                    .filter(project => Object.values(project).some(value => searchTestingWithoutImages(searchItem,value)))
                    .map(project => <ProjectCard project={project}/>)
                }
            </div>
        </>
    )
};

export default Projects;