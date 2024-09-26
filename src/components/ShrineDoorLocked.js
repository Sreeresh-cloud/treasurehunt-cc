import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShrineDoorLocked.css'; // Add custom CSS for styling

const ShrineDoorLocked = () => {
  const [inputValue, setInputValue] = useState(''); // To store user input
  const navigate = useNavigate(); // For page navigation

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (inputValue.toLowerCase() === 'godfather') {
      navigate('/shrine-dark-room'); // Navigate to ShrineDarkRoom page
    } else {
      alert('Incorrect answer! Try again.'); // Alert if the input is incorrect
    }
  };

  return (
    <div className="shrine-locked-container">
      <h1>Shrine Door Locked</h1>
      <p>
        Maniyan finds the door is locked. 
      </p>
      <div className="horn-container">
        <img
          src="./horn.png" // Replace with your horn image path
          alt="Horn"
          className="horn-image"
          onClick={() => {
            const audio = new Audio('./kerivaada.mp3'); // Replace with your audio path
            audio.play();
          }}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="🎥"
          value={inputValue}
          onChange={handleInputChange}
          className="answer-input"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ShrineDoorLocked;
