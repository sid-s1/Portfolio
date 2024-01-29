import React from 'react';
import './App.css';
import github from './github.png';
import linkedin from './linkedin.png';
import email from './email.png';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="landing-header">
        <div className="header-icons">Home</div>
        <div className="header-icons">Projects</div>
        <div className="header-icons">About</div>
      </header>
      <div className="main-block">
        <div className="content">
          <h1 className='name'>SIDDHARTH SINGH</h1>
          <h3 className='title'>SOFTWARE ENGINEER</h3>
          <div className="socials-links">
            <img src={github} alt="github-logo" className="link-icons"/>
            <img src={linkedin} alt="linkedin-logo" className="link-icons"/>
            <img src={email} alt="email-logo" className="link-icons"/>
          </div>
        </div>
        <div className="profile-photo"></div>
      </div>
    </div>
  );
}

export default App;
