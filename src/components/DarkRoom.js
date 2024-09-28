import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DarkRoom.css';

const DarkRoom = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [isRoomLit, setIsRoomLit] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [message, setMessage] = useState('');
  const [isTransitionComplete, setIsTransitionComplete] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [buttons, setButtons] = useState([]);
  const navigate = useNavigate();
  const [congratsVisible, setCongratsVisible] = useState(false);

  const generateButtonNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 23) {
      const randomNum = Math.floor(Math.random() * 90) + 10;
      numbers.add(randomNum);
    }
    numbers.add(12);
    setButtons([...numbers].sort((a, b) => a - b));
  };

  useEffect(() => {
    generateButtonNumbers();
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = (index) => {
    const clickedNumber = buttons[index];
    setAttempts((prevAttempts) => prevAttempts + 1);

    if (clickedNumber === 12) {
      setFadeOut(true);
      setTimeout(() => {
        setIsRoomLit(true);
        setFadeOut(false);
      }, 1000);
      setMessage('');
      setShowButtons(false);
    } else {
      if (attempts < 2) {
        setMessage(clickedNumber < 12 ? "You're almost closer!" : "Try again");
        setTimeout(() => setMessage(''), 2000);
      } else {
        setMessage('Oh no! Kelu is trapped in the darkness');
        setShowButtons(false);
      }
    }
  };

  useEffect(() => {
    if (isRoomLit) {
      const transitionCompleteTimer = setTimeout(() => {
        setIsTransitionComplete(true);
      }, 5000);
      return () => clearTimeout(transitionCompleteTimer);
    }
  }, [isRoomLit]);

  useEffect(() => {
    if (isTransitionComplete) {
      navigate('/jigsaw-puzzle');
    }
  }, [isTransitionComplete, navigate]);

  return (
    <div className={`dark-room ${isRoomLit ? 'lit-room' : ''} ${fadeOut ? 'fade-out' : ''}`}>
      {showButtons && attempts < 3 ? (
        <>
          <h1 className="task-text font-bold">Kunjikelu steps into a dark room</h1>
          <h2>There are a few strange switches scattered around the dim room. He must find the correct switch to light up the room to unravel the mystery. Turn on the correct switch below to light up the room.</h2>
          <h3>ALERT!! KELU ONLY HAVE 3 CHANCES. ONCE HE IS OUT OF CHANCE, HE WOULD BE TRAPPED INSIDE THE DARKNESS FOREVER</h3>
          <p className="hint-text">
            Hint: If a clock shows the correct time once a day but loses 1 hour every day, what is the total number of hours in 12 days?
          </p>
          <div className="matrix-container">
            {buttons.map((number, index) => (
              <button
                key={index}
                className="matrix-button"
                onClick={() => handleButtonClick(index)}
              >
                {number}
              </button>
            ))}
          </div>
          {message && <p className="feedback-message">{message}</p>}
        </>
      ) : (
        <div className="lit-message">
          <h2 className="game-over">{message}</h2>
        </div>
      )}
      {attempts >= 3 && !isRoomLit && (
        <h2 className="game-over">Oh no! Kelu is trapped in the darkness</h2>
      )}
    </div>
  );
};

export default DarkRoom;
