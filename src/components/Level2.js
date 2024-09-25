import React from 'react';
import './Level2.css'; // Import CSS for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Level2 = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSkip = () => {
    navigate('/escape'); // Navigate to Escape page when the Skip button is clicked
  };

  return (
    <div className="level2-container">
      <h1>Level 2: The Shrine</h1>
      <p>
        Long years after, Maniyan, the generation hero, is determined to find the lamp. 
        He knows it is inside a shrine. Help Maniyan find the lamp...
      </p>
      
      {/* Skip button to navigate to the Escape page */}
      <button onClick={handleSkip} className="skip-button">Skip</button>
    </div>
  );
};

export default Level2;
