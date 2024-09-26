import React from "react";
import "./Level2.css"; // Import CSS for styling
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import shrineBg from "../images/shrineBg.png";
import maniyan from "../images/maniyanNormal.png";
const Level2 = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSkip = () => {
    navigate("/escape"); // Navigate to Escape page when the Skip button is clicked
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen px-5">
      <div className="bg-black bg-opacity-60 rounded-2xl p-5 w-1/2">
        <h1 className="font-bold">Level 2: The Shrine</h1>
        <p className="text-white">
          Long years after, Maniyan, the generation hero, is determined to find
          the lamp. He knows it is inside a shrine. Help Maniyan find the
          lamp...
        </p>

        {/* Skip button to navigate to the Escape page */}
        <button onClick={handleSkip} className="skip-button outline-none">
          Next
        </button>
      </div>
      <div className="w-1/2 h-full flex items-end">
        <img src={maniyan} className="bottom-0 h-[80%] w-full"></img>
      </div>

      <img
        src={shrineBg}
        className="absolute top-0 left-0 w-screen h-screen -z-10"
      ></img>
    </div>
  );
};

export default Level2;
