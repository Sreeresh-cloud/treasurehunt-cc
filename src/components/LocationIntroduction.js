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
        <h1 className='font-bold'>Welcome to the Palace</h1>
        <p>
          I am Kunjikelu, and my mission is to find the magical lamp hidden deep within the palace. 
          The lamp holds immense power and is said to grant wishes to those who possess it. 
          Join me on this adventure as we unravel the mysteries of the palace and face the challenges ahead.
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
