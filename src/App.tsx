import React, {useState} from 'react';
import './App.css';
import Homepage from './components/Homepage';

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>("homepage");
  // const renderSwitch = (param: String) => {
  //   switch(param) {
  //     case "homepage":
  //       return "homepage";
  //   }
  // };
  return (
    <div className="App">
      <Homepage changeMainPage={(newPage: String) => setSelectedPage(newPage)}/>
    </div>
  );
}

export default App;
