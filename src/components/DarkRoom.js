import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For routing to the next page
import './DarkRoom.css'; // Include the CSS for DarkRoom

const DarkRoom = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [isRoomLit, setIsRoomLit] = useState(false); // State to control lighting up the room
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out effect
  const [showSecondMessage, setShowSecondMessage] = useState(false); // Show second message
  const [isTransitionComplete, setIsTransitionComplete] = useState(false); // Final stage before routing
  const navigate = useNavigate(); // Use React Router for navigation

  // Toggle visibility of buttons when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 500); // Show buttons after 0.5 seconds

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  // Function to handle button click
  const handleButtonClick = (index) => {
    if (index === 11) { // Index 11 corresponds to button number 12 (zero-based index)
      setFadeOut(true); // Trigger fade-out effect
      setTimeout(() => {
        setIsRoomLit(true); // Light up the room after fade-out
        setFadeOut(false); // Reset fadeOut state after transition
      }, 1000); // Wait for fade-out duration before lighting up the room
    }
  };

  // Show second message after first message disappears
  useEffect(() => {
    if (isRoomLit) {
      const secondMessageTimer = setTimeout(() => {
        setShowSecondMessage(true);
      }, 2000); // Delay for second message to appear
      const transitionCompleteTimer = setTimeout(() => {
        setIsTransitionComplete(true);
      }, 5000); // Wait for second message to fade out before routing
      return () => {
        clearTimeout(secondMessageTimer);
        clearTimeout(transitionCompleteTimer);
      };
    }
  }, [isRoomLit]);

  // Navigate to the next page once the transitions are complete
  useEffect(() => {
    if (isTransitionComplete) {
      navigate('/jigsaw-puzzle'); // Route to the next page (JigsawPuzzle)
    }
  }, [isTransitionComplete, navigate]);

  return (
    <div className={`dark-room ${isRoomLit ? 'lit-room' : ''} ${fadeOut ? 'fade-out' : ''}`}>
      {!isRoomLit ? (
        <>
          <h1 className="task-text">Task 2: Dark Room</h1>
          <h2>Light up the room to unravel the mystery. Turn on the correct switch below to light up the room.</h2>
          <h3>ALERT!! YOU ONLY HAVE 5 ATTEMPTS</h3>
          <p className="hint-text">
            Hint: What do you get when you multiply the number of faces of a cube by the number of vertices of a triangle?
          </p>
          <div className={`matrix-container ${showButtons ? 'fade-in' : ''}`}>
            {Array.from({ length: 24 }, (_, index) => (
              <button
                key={index}
                className="matrix-button"
                onClick={() => handleButtonClick(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="lit-message">
          <h1 className={`fade-out-text ${showSecondMessage ? 'hide' : ''}`}>Congrats, The room is lightened up!</h1>
          {showSecondMessage && (
            <h2 className={`fade-in-text ${isTransitionComplete ? 'hide' : ''}`}>
              You are near to the lamp. The lamp is hidden somewhere. Find it!
            </h2>
          )}
        </div>
      )}
    </div>
  );
};

export default DarkRoom;
