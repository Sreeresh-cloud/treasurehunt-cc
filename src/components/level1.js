import React, { useState } from 'react';
import lockedDoorImage from '../images/locked-door.png';
import unlockedDoorImage from '../images/unlocked-door.png';
import './Level1.css';
import DarkRoom from './DarkRoom'; // Import the DarkRoom component

const Level1 = () => {
  const [pinEntered, setPinEntered] = useState(false);
  const [doorSliding, setDoorSliding] = useState(false);
  const [showDarkRoom, setShowDarkRoom] = useState(false); // Control the rendering of DarkRoom

  const handlePinInput = (e) => {
    if (e.target.value === '404') {
      setPinEntered(true);
      setTimeout(() => {
        setDoorSliding(true);
        setTimeout(() => {
          setShowDarkRoom(true); // Show DarkRoom after the door slides out
        }, 1500); // Adjust this duration to match the slide-out animation
      }, 1000); // Start sliding after 1 second
    }
  };

  return (
    <div className="level1">
      {/* Render the door and overlay only if DarkRoom is not shown */}
      {!showDarkRoom && (
        <div className={`door-overlay ${doorSliding ? 'slide-out' : ''}`}>
          <div className={`door-container ${pinEntered ? 'door-unlocked' : ''}`}>
            <img
              src={pinEntered ? unlockedDoorImage : lockedDoorImage}
              alt={pinEntered ? 'Unlocked Door' : 'Locked Door'}
              className="door-image"
            />
          </div>

          {!pinEntered ? (
            <div className="input-container">
              <h1>Level 1: The Door Closed</h1>
              <p>The Door is locked. Enter the PIN:</p>
              <button onClick={() => window.open('https://http.cat/404', '_blank')} style={{ marginBottom: '10px' }}>
                Touch me if you want the PIN
              </button>
              <input type="text" placeholder="Enter PIN" onChange={handlePinInput} />
            </div>
          ) : (
            <div className="unlocking-message">
              <h1>The door is opening...</h1>
            </div>
          )}
        </div>
      )}

      {/* Conditionally render the DarkRoom component */}
      {showDarkRoom && <DarkRoom />}
    </div>
  );
};

export default Level1;
