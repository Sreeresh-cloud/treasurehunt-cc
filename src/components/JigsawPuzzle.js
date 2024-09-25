import React, { useState } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import './JigsawPuzzle.css'; // Import your custom CSS

const JigsawPuzzlecomponent = () => {
  const [isSolved, setIsSolved] = useState(false); // To track if the puzzle is solved
  const [showLamp, setShowLamp] = useState(false); // To track when to show the lamp

  const handleSolved = () => {
    setIsSolved(true); // Set the puzzle as solved
    setTimeout(() => {
      setShowLamp(true); // Show the lamp after the puzzle falls
    }, 1500); // Delay for the fall animation to complete
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
          <img src="/lamp.png" alt="Lamp" className="lamp-image" /> {/* Ensure the image is in the public folder */}
        </div>
      )}
    </div>
  );
};

export default JigsawPuzzlecomponent;
