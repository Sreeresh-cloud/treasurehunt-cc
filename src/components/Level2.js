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
    <div className="flex justify-center items-center w-screen h-screen px-5 fade-in"> {/* Apply the fade-in class */}
      <div className="bg-black bg-opacity-60 rounded-2xl p-5 w-1/2">
        <h1 className="font-bold">Level 2: The Shrine</h1>
        <p className="text-white">
          Maniyan is a famous thief, renowned for his daring robberies and clever heists. Recently, he learns about a legendary lamp hidden in the Eastern Shrine of Eldoria, a place whispered about in tales of magic and mystery. Tired of his life of petty crimes and longing for something greater, Maniyan decides that this is his chance to pull off the ultimate heist and claim the magical lamp for himself. With a determined heart, he sets out on his bold quest, ready to face whatever challenges lie ahead.
        </p>

        {/* Skip button to navigate to the Escape page */}
        <button onClick={handleSkip} className="skip-button outline-none">
          Next
        </button>
      </div>
      <div className="w-1/2 h-full flex items-end">
        <img src={maniyan} className="bottom-0 h-[80%] w-full" alt="Maniyan" />
      </div>

      {/* Background Image */}
      <img
        src={shrineBg}
        className="absolute top-0 left-0 w-screen h-screen object-cover -z-10"
        alt="Shrine Background"
      />
    </div>
  );
};

export default Level2;
