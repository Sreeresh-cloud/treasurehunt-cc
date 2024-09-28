// LocationIntroduction.js
import React from 'react';
import { Link } from 'react-router-dom';
import characterImage from '../images/character.png'; // Path to your character image
import './LocationIntroduction.css'; // Import the CSS file
import localintroMan from '../images/localIntroMan.png'
const LocationIntroduction = () => {
  return (
    <div className="locIntroduction">
      <div className="content ml-10">
        <h1 className='font-bold text-[40px]'>Welcome to the Palace</h1>
        <p className = 'text-[10px]'>
         In a magical land, there exists a legendary lamp that can grant the wishes of anyone brave enough to find it. However, many adventurers have tried to seek the lamp and have never returned. Our first hero, Kunjikelu, is determined to uncover its secrets. As he journeys through this enchanted world, he encounters a massive door leading to a beautiful palace, adorned with sparkling gems and intricate designs.
        </p>
        <Link to="/level1">
          <button className="help-button">Help Kunjikelu</button>
        </Link>
      </div>
      <div className="character-container w-full h-full flex justify-end  justify-items-end">
        <img src={localintroMan} alt="Kunjikelu" className="character-image aspect-auto" />
      </div>
    </div>
  );
};

export default LocationIntroduction;
