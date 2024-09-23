import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/introduction'); // Navigate to the next page
  };

  return (
    <div className="home-container">
     
        <button className="start-button" onClick={startGame}>
          Start Game
        </button>
     
    </div>
  );
};

export default HomePage;
