// Introduction.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './introduction.css'; // Import the CSS file
import bgImage from "../images/introductionBg.jpg"

const Introduction = () => {
  return (
    <div  className="introduction p-20"  >

       <img
        src={bgImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />

      
      <div className="textContainer bg-black bg-opacity-60 rounded-3xl p-5">
        <h1 className='text-[60px] font-mono font-bold text-white'>About the Event</h1>
        <p className='text-[30px]'>
        Join us for an exciting online treasure hunt inspired by the movie "Ajayante Randam Moshanam" (ARM). Navigate through three challenging levels filled with clues, puzzles, and adventure as you help our heroes find the magical lamp.
        </p>
        <h2 className='text-[25px]'>Solve each challenge to move forward and compete for the chance to win movie tickets!</h2>
        
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
