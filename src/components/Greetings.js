import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Greetings.css"; // Optional: Add your CSS for styling

import greetingsBg from "../images/greetingsBg.jpg";

const Greetings = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetReward = () => {
    navigate("/success"); // Navigate to SuccessPage
  };

  return (
    <div className="greetings-container">
      <div className="bg-black bg-opacity-40 rounded-2xl">
        <p className="text-white">
          Maniyan Lifts the Lamp and exits the Cave. As he exits the cave, the
          sun greets him with warmth, a reminder that every journey has its
          rewards.
        </p>
        <strong
          style={{ display: "block", textAlign: "center", margin: "20px 0" }}
        >
          Congratulations! You have successfully completed the Treasure Hunt!
          Your cleverness and determination have led you to victory. Well done!
          Grab your reward for helping Ajayan find the Lamp.
        </strong>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button className="get-reward-button" onClick={handleGetReward}>
            Get Reward
          </button>
        </div>
      </div>

      <img
        src={greetingsBg}
        className="absolute top-0 left-0 w-screen h-screen -z-10"
      ></img>
    </div>
  );
};

export default Greetings;
