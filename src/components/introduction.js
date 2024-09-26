// Introduction.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './introduction.css'; // Import the CSS file

const Introduction = () => {
  return (
    <div  className="introduction p-20"  >
      
      <div className="textContainer bg-black bg-opacity-60 rounded-3xl p-5">
        <h1 className='text-[60px] font-mono font-bold text-white'>About the Treasure Hunt</h1>
        <p className='text-[30px]'>
          The Treasure Hunt is a three-level ARM (Ajayante Randam Moshanam) Movie-based event.
          Each level contains several questions, and solving each question moves the participant forward.
        </p>
        <h2 className='text-[25px]'>Levels</h2>
        <p>
          The entire event is divided into three levels, wherein each level heroes try to find and take the magical lamp:
        </p>
        <p>
          In the first level, you are Kunjikelu. Help Kunjikelu find the lamp from the palace!
        </p>
        <Link to="/locintro1">
          <button 
        className="button bg-gradient-to-tr from-[#ffcc00] to-[#8f750c] hover:bg-gradient-to-tr hover:from-[#8f750cba] hover:to-[#ffcc00c4] transition-all font-mono"
        >Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
