import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Level3.css'; // Import custom CSS for styling

const Level3 = () => {
  const [stage, setStage] = useState(0); // Track the current stage of the sequence
  const navigate = useNavigate();

  useEffect(() => {
    const timers = [];

    // Stage 1: Fade in "Level 3"
    timers.push(setTimeout(() => {
      setStage(1);
    }, 500)); // Initial fade-in delay

    // Stage 2: Fade out "Level 3"
    timers.push(setTimeout(() => {
      setStage(2);
    }, 3000)); // Duration to display "Level 3"

    // Stage 3: Show "You have reached Level 3..." text with fade-in animation
    timers.push(setTimeout(() => {
      setStage(3);
    }, 4000)); // Delay before showing the next text

    // Cleanup timers on component unmount
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  const navigateToMorseCode = () => {
    navigate('/morsecode'); // Navigate to MorseCode page
  };

  return (
    <div className="level3-container">
      {/* Stage 1: Display Level 3 with fade-in animation */}
      {stage === 1 && (
        <div className="fade-in level3-title">
          Level 3
        </div>
      )}

      {/* Stage 3: Display text and button with fade-in animation */}
      {stage === 3 && (
        <div className="fade-in level3-text">
          <p>You have reached Level 3 of the hunt.</p>
          <p>You help Third Generation hero AJAYAYAN to find the Lamp.</p>
          <button className="help-button" onClick={navigateToMorseCode}>
            Help Ajayan
          </button>
        </div>
      )}
    </div>
  );
};

export default Level3;
