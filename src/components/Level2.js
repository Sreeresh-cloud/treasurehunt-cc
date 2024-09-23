// Level2.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Level2 = () => {
  const [fenceCut, setFenceCut] = useState(false);
  const [lockOpened, setLockOpened] = useState(false);

  const handleFenceCut = () => {
    setFenceCut(true);
  };

  const handleLockOpen = () => {
    setLockOpened(true);
  };

  return (
    <div className="level2">
      <h1>Level 2: The Shrine</h1>

      {!fenceCut ? (
        <div>
          <p>You face a thorn fence. Use Ctrl + X to cut the fence.</p>
          <button onClick={handleFenceCut}>Cut Fence</button>
        </div>
      ) : !lockOpened ? (
        <div>
          <p>Find the right animal to unlock the door.</p>
          <button onClick={handleLockOpen}>Unlock Door</button>
        </div>
      ) : (
        <div>
          <p>Maniyan finds the lamp, but it's another fake!</p>
          <Link to="/level3">
            <button>Proceed to Level 3</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Level2;
