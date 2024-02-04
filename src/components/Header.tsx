import React from "react";

interface HeaderProps {
    onNavbarClick: (param: string) => void;
}

const Header: React.FC<HeaderProps> = ({onNavbarClick}) => {
    return (
        <header className="landing-header">
            <div className="header-icons" onClick={() => onNavbarClick("Homepage")}>Home</div>
            <div className="header-icons" onClick={() => onNavbarClick("Projects")}>Projects</div>
            <div className="header-icons" onClick={() => onNavbarClick("About")}>About</div>
        </header>
    )
};

export default Header;