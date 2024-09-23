import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import lockedDoorImage from '../images/locked-door.png'; // Path to your locked door image
import unlockedDoorImage from '../images/unlocked-door.png'; // Path to your unlocked door image
import './Level1.css'; // Import the CSS file


const Level1 = () => {
  const [pinEntered, setPinEntered] = useState(false);
  const [puzzleSolved, setPuzzleSolved] = useState(false);

  const handlePinInput = (e) => {
    if (e.target.value === '404') {
      setPinEntered(true);
    }
  };

  const handlePuzzleSolve = () => {
    setPuzzleSolved(true);
  };

  const openErrorPage = () => {
    window.open('https://http.cat/404', '_blank'); // Opens a new tab with a 404 error page
  };

  return (
    <div className="level1">
      <h1>Level 1: The Palace</h1>

      <div>
        <img
          src={pinEntered ? unlockedDoorImage : lockedDoorImage}
          alt={pinEntered ? "Unlocked Door" : "Locked Door"}
          style={{ width: '300px', height: 'auto', marginBottom: '20px' }} // Adjust size as needed
        />
      </div>

      {!pinEntered ? (
        <div>
          <p>The Door is locked. Enter the PIN:</p>
          <button onClick={openErrorPage} style={{ marginBottom: '10px' }}>
            Touch me if you want the PIN
          </button>
          <input type="text" placeholder="Enter PIN" onChange={handlePinInput} />
        </div>
      ) : !puzzleSolved ? (
        <div>
          <p>You have entered the dark hallway and found a clue: "PUZZLE"</p>
          <button onClick={handlePuzzleSolve}>Solve Puzzle</button>
        </div>
      ) : (
        <div>
          <p>You have found the Python Snake. Kelu finds the lamp but it's a fake!</p>
          <Link to="/level2">
            <button>Proceed to Level 2</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Level1;
