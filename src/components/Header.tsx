import React from "react";

interface HeaderProps {
    selectedPage: string,
    onNavbarClick: (param: string) => void
}

const Header: React.FC<HeaderProps> = ({selectedPage,onNavbarClick}) => {
    if (selectedPage === "Home") {

    }
    return (
        <header className="landing-header">
            <div className={selectedPage === "Homepage" ? "header-icons selected" : "header-icons"} onClick={() => onNavbarClick("Homepage")}>Home</div>
            <div className={selectedPage === "Projects" ? "header-icons selected" : "header-icons"} onClick={() => onNavbarClick("Projects")}>Projects</div>
            <div className={selectedPage === "About" ? "header-icons selected" : "header-icons"} onClick={() => onNavbarClick("About")}>About</div>
        </header>
    )
};

export default Header;