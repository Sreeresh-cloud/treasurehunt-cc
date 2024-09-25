import React, { useState } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import './JigsawPuzzle.css'; // Import your custom CSS
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const JigsawPuzzlecomponent = () => {
  const [isSolved, setIsSolved] = useState(false); // To track if the puzzle is solved
  const [showLamp, setShowLamp] = useState(false); // To track when to show the lamp
  const [showMessage, setShowMessage] = useState(false); // To track when to show the message
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSolved = () => {
    setIsSolved(true); // Set the puzzle as solved
    setTimeout(() => {
      setShowLamp(true); // Show the lamp after the puzzle falls
      setTimeout(() => {
        setShowMessage(true); // Show the message after the lamp is revealed
      }, 1000); // Delay for a moment before showing the message
    }, 1500); // Delay for the fall animation to complete
  };

  const handleNext = () => {
    navigate('/level2'); // Navigate to the Level 2 page
  };

  return (
    <div className="app-container">
      <h1>Jigsaw Puzzle</h1>

      {/* Jigsaw puzzle container with falling animation */}
      <div className={`jigsaw-container ${isSolved ? 'falling-puzzle' : ''}`}>
        <JigsawPuzzle
          imageSrc="/python.webp" // Ensure this image is in the public folder
          rows={3}
          columns={3}
          onSolved={handleSolved}
        />
      </div>

      {/* Lamp will be revealed after the puzzle is solved and pieces fall */}
      {showLamp && (
        <div className="lamp-container">
          <img src="./lamp.webp" alt="Lamp" className="lamp-image" /> {/* Ensure the image is in the public folder */}
        </div>
      )}

      {/* Message displayed after revealing the lamp */}
      {showMessage && (
        <div className="message-container">
          <h2>Oops, The Lamp is fake, Kelu failed to find the lamp.</h2>
          <button onClick={handleNext} className="next-button">Next</button>
        </div>
      )}
    </div>
  );
};

export default JigsawPuzzlecomponent;
