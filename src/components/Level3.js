// Level3.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Level3 = () => {
  const [morseDecoded, setMorseDecoded] = useState(false);
  const [puzzleSolved, setPuzzleSolved] = useState(false);

  const handleMorseDecode = () => {
    setMorseDecoded(true);
  };

  const handlePuzzleSolve = () => {
    setPuzzleSolved(true);
  };

  return (
    <div className="level3">
      <h1>Level 3: The Tortoise Forest</h1>

      {!morseDecoded ? (
        <div>
          <p>Decode the Morse code to continue.</p>
          <button onClick={handleMorseDecode}>Decode Morse Code</button>
        </div>
      ) : !puzzleSolved ? (
        <div>
          <p>Calculate the pH and solve the puzzle to cross the river.</p>
          <button onClick={handlePuzzleSolve}>Solve Puzzle</button>
        </div>
      ) : (
        <div>
          <p>Ajayan finds the magical lamp!</p>
          <Link to="/success">
            <button>Finish the Hunt</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Level3;
