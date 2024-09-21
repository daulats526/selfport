import React from 'react'
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const Education = () => {
    const typedRef = useRef(null);
    useEffect(() => {
      const options = {
        strings: [
          "Bachore Of Computer Application(BCA)",
          "Univercity of Rajasthan(2019-2023)",
          "I'm Frontend developer",
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      };
  
      const typed = new Typed(typedRef.current, options);
  
      return () => {
        typed.destroy();
      };
    }, []);
  
    
  return (
    <div>
        <h1>EDUCATION</h1>
       <div className="container home" id="home">
        <div className="left" data-aos="flip-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          </div>
          </div>

    </div>
  )
}

export default Education
