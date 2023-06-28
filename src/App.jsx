import React from "react";
import Intro from "./components/Intro";
import Demo from "./components/Demo";
import "./App.css";


const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Intro/>
        <Demo/>
        
      </div>
    </main>
  );
};

export default App;
