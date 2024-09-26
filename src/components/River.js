// River.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './River.css'; // Custom styling


const River = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [showContent, setShowContent] = useState(true);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [finalInput, setFinalInput] = useState('');

  const handleTravelButtonClick = () => {
    setShowContent(false);
    setMessage("Hydrogen ion concentration of the water is 3.16 × 10^−5. Calculate the pH of the solution.");
  };

  const handleSubmit = () => {
    if (input === "4.5") {
      setMessage("What can Ajayan conclude about the nature of the river from this calculation?");
    } else {
      setMessage("Try again. What is the pH of the river water?");
    }
  };

  const handleFinalSubmit = () => {
    if (finalInput.toLowerCase().includes("acid")) {
      setMessage("Yes, You have helped Ajayan find out that the river is acidic. Now, Ajayan has to find some other way to cross the river.");
    } else {
      setMessage("Try again. What can Ajayan conclude about the nature of the river?");
    }
  };

  const handleFindWay = () => {
    navigate('/magical-bridge'); // Navigate to MagicalBridge component using useNavigate
  };

  return (
    <div className="river-container">
      {showContent && (
        <>
          <p>Ajayan continues on his journey, only to encounter a river blocking his path. As he peers into the murky waters, an unsettling feeling washes over him. Sensing something amiss, he investigates further and discovers that the water is acidic. Find out by helping him calculate the pH of the river water.</p>
          <button className="help-button" onClick={handleTravelButtonClick}>
            Help Ajayan
          </button>
        </>
      )}

      {message && <div className="river-message">{message}</div>}

      {message === "Hydrogen ion concentration of the water is 3.16 × 10^−5. Calculate the pH of the solution." && (
        <>
          <input
            type="text"
            className="river-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your pH calculation here"
          />
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </>
      )}

      {message === "What can Ajayan conclude about the nature of the river from this calculation?" && (
        <>
          <input
            type="text"
            className="final-input"
            value={finalInput}
            onChange={(e) => setFinalInput(e.target.value)}
            placeholder="Enter your conclusion here"
          />
          <button className="final-submit-button" onClick={handleFinalSubmit}>
            Submit
          </button>
        </>
      )}

      {message === "Yes, You have helped Ajayan find out that the river is acidic. Now, Ajayan has to find some other way to cross the river." && (
        <button className="find-way-button" onClick={handleFindWay}>
          Find Way
        </button>
      )}
    </div>
  );
};

export default River;
