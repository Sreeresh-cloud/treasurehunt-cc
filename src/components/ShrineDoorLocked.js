import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShrineDoorLocked.css'; // Add custom CSS for styling

const ShrineDoorLocked = () => {
  const [inputValue, setInputValue] = useState(''); // To store user input
  const [doorOpened, setDoorOpened] = useState(false); // To track if the door is opened
  const [backgroundColor, setBackgroundColor] = useState('white'); // Track background color
  const navigate = useNavigate(); // For page navigation

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (inputValue.toLowerCase() === 'godfather') {
      setDoorOpened(true); // Set the door to opened if the correct answer is provided
    } else {
      alert('Incorrect answer! Try again.'); // Alert if the input is incorrect
    }
  };

  // Effect to change background color when door opens
  useEffect(() => {
    if (doorOpened) {
      setBackgroundColor('black'); // Change background color to black
    }
  }, [doorOpened]);

  return (
    <div className={`shrine-locked-container`} style={{ backgroundColor }}>
      {!doorOpened ? (
        <>
          <h1>Shrine Door Locked</h1>
          <p>Maniyan finds the door is locked.</p>
          <div className="horn-container">
            <img
              src="/horn.png" // Ensure this path is correct
              alt="Horn"
              className="horn-image"
              onClick={() => {
                const audio = new Audio('/kerivaada.mp3'); // Ensure this path is correct
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
        </>
      ) : (
        <div className="reveal-container">
          <div className="door-slide">
            <p className="question-box">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
            <form className="question-form">
              <input
                type="text"
                placeholder="Type your answer here"
                className="answer-input"
              />
              <button type="submit" className="submit-button">Submit Answer</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShrineDoorLocked;
