// ShrineDoor.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShrineDoor.css'; // Add custom CSS for styling

const ShrineDoor = () => {
  const [inputValue, setInputValue] = useState(''); // To store user input
  const [doorOpened, setDoorOpened] = useState(false); // To track if the door is opened
  const navigate = useNavigate(); // For page navigation

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (inputValue === '36') {
      setDoorOpened(true); // Set the door to opened if the correct answer is provided
    } else {
      alert('Incorrect answer! Try again.'); // Alert if the input is incorrect
    }
  };

  const handleNext = () => {
    navigate('/shrine-door-locked'); // Navigate to the next page (replace with your desired route)
  };

  return (
    <div className="shrine-container">
      <h1>Shrine Door</h1>
      <p>
        Maniyan reached the shrine and finds the door is being guarded by many eagles.
      </p>
      <p>
        FINDING THE NUMBER OF EAGLES WHICH GUARDS THE SHRINE:
      </p>
      <div className="riddle-box">
        <p>
          "We as a group and again as ourselves, half of us, half of the rest and you become a 100. How many of us are here?"
        </p>
      </div>

      {!doorOpened ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your answer"
            value={inputValue}
            onChange={handleInputChange}
            className="riddle-input"
          />
          <button type="submit" className="riddle-submit">Submit</button>
        </form>
      ) : (
        <>
          <p> Maniyan Successfully Crossed the Eagle Guard  </p>
          <button onClick={handleNext} className="next-button"> Go near the Door</button>
        </>
      )}
    </div>
  );
};

export default ShrineDoor;
