// Introduction.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './introduction.css'; // Import the CSS file

const Introduction = () => {
  return (
    <div className="introduction">
      
      <div className="textContainer">
        <h1>About the Treasure Hunt</h1>
        <p>
          The Treasure Hunt is a three-level ARM (Ajayante Randam Moshanam) Movie-based event.
          Each level contains several questions, and solving each question moves the participant forward.
        </p>
        <h2>Levels</h2>
        <p>
          The entire event is divided into three levels, wherein each level heroes try to find and take the magical lamp:
        </p>
        <p>
          In the first level, you are Kunjikelu. Help Kunjikelu find the lamp from the palace!
        </p>
        <Link to="/locintro1">
          <button className="button">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
