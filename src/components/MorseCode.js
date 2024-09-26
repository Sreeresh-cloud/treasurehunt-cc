import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './MorseCode.css'; // Custom styling

const MorseCode = () => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(false); // State to track correctness
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.toLowerCase() === "you are the way") {
      setMessage("Successfully Decoded. Ajayan finds the lamp inside a cave in the Tortoise forest.");
      setIsCorrect(true); // Set to true when the answer is correct
    } else {
      setMessage("Incorrect answer. Please try again.");
      setIsCorrect(false); // Set to false for incorrect answers
    }
  };

  const handleTravel = () => {
    navigate('/river'); // Navigate to River component
  };

  return (
    <div className="morsecode-container">
      <div className="morsecode-story">
        <p>Ajayan, a skilled radio mechanic living in a small village, hears whispers of a magical lamp hidden nearby. Intrigued and determined, he decides to embark on a quest to find it.</p>
        <p>Before he sets off, his beloved Lakshmi writes him a letter in morse code to guide him on his journey. Decode this morse code:</p>
      </div>
      <p>Ajayan finds a morse code written in the letter sent by Lakshmi</p>
      <strong>The Morse Code: -.-- --- ..- / .- .-. . / - .... . / .-- .- -.--</strong>
      <input
        type="text"
        className="morsecode-input"
        value={input}
        onChange={handleChange}
        placeholder="Enter your answer here"
      />
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
      {message && <div className="morsecode-message">{message}</div>}
      {/* Render the Travel button only if the answer is correct */}
      {isCorrect && (
        <button className="travel-button" onClick={handleTravel}>
          Travel to Tortoise Forest
        </button>
      )}
    </div>
  );
};

export default MorseCode;
