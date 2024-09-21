
import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from './component/Contact'
import Aos from "aos";
import "aos/dist/aos.css"
import Education from "./component/Education";


const App = () => {
 useEffect(() => {
  Aos.init();
  
 }, [])
 
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        
        <Skills />
        <Projects />
        <Education/>
        <Contact />
      </div>
    </>
  );
};

export default App;