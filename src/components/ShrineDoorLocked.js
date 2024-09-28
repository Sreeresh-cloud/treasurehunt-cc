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
      <h1 style={{ color: 'orange' }}>Maniyan finds the door is locked</h1>
      <p style={{ color: 'white' }}>
        Help Maniyan open the door and get the lamp 
      </p>
      <div className="horn-container">
      <img
  src="./horn.png" // Replace with your horn image path
  alt="Horn"
  className="horn-image"
  style={{ width: '100px', height: 'auto', transform: 'translateY(300px)' }} // Adjust the width as needed
  onClick={() => {
    const audio = new Audio('./kerivaada.mp3'); // Replace with your audio path
    audio.play();
  }}
/>

      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Identify the film from which this iconic line is taken"
          value={inputValue}
          onChange={handleInputChange}
          className="answer-input"
          style={{ width: '500px', height: 'auto', transform: 'translateY(-100px)' }}
        />
        <button type="submit" className="submit-button" style={{ width: '100px', height: 'auto', transform: 'translateY(-100px)' }}>Submit</button>
      </form>
    </div>
  );
};

export default ShrineDoorLocked;
