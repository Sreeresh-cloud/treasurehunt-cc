import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = ({ isIntialised }) => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/introduction"); // Navigate to the next page
    isIntialised();
  };

  return (
    <div className="home-container">
      <button
        className="start-button bg-gradient-to-tr from-[#ffcc00] to-[#8f750c] hover:bg-gradient-to-tr hover:from-[#8f750cba] hover:to-[#ffcc00c4] transition-all font-mono"
        onClick={startGame}
      >
        Start Game
      </button>
     
    </div>
  );
};

export default HomePage;
