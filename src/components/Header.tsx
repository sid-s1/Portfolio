import React from "react";

interface HeaderProps {
    onNavbarClick: (param: String) => void;
}

const Header: React.FC<HeaderProps> = ({onNavbarClick}) => {
    return (
        <header className="landing-header">
            <div className="header-icons">Home</div>
            <div className="header-icons" onClick={() => onNavbarClick("projects")}>Projects</div>
            <div className="header-icons">About</div>
        </header>
    )
};

export default Header;