import React, {useState} from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import About from './components/About';

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>("Homepage");
  return (
    <div className="App">
      { 
        selectedPage === "Homepage" && <Homepage changeMainPage={(param: string) => setSelectedPage(param)}/> 
      }
      {
         selectedPage === "Projects" && <Projects changeMainPage={(param: string) => setSelectedPage(param)}/> 
      }
      {
         selectedPage === "About" && <About changeMainPage={(param: string) => setSelectedPage(param)}/> 
      }
    </div>
  );
}

export default App;
