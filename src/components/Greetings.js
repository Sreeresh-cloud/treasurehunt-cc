import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Greetings.css"; // Import the updated CSS

import greetingsBg from "../images/greetingsBg.jpg";
import ajayanHoldingVilakk from "../images/Ajayan-holding-vilakk.png"; // Import the additional image

const Greetings = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetReward = () => {
    navigate("/success"); // Navigate to SuccessPage
  };

  return (
    <div className="greetings-container relative w-screen h-screen flex flex-col items-center justify-center p-4 fade-in">
      <div className="bg-black bg-opacity-40 rounded-2xl p-4 text-center text-white">
        <p>
          Ajayan lifts the lamp and exits the cave. As he exits the cave, the
          sun greets him with warmth, a reminder that every journey has its
          rewards.
        </p>
        <strong className="block my-5">
          Congratulations! You have successfully completed the Treasure Hunt!
          Your cleverness and determination have led you to victory. Well done!
          Grab your reward for helping Ajayan find the lamp.
        </strong>

        <div>
          <button className="get-reward-button" onClick={handleGetReward}>
            Get Reward
          </button>
        </div>
      </div>

      {/* Display the new image */}
      <img
        src={ajayanHoldingVilakk}
        style={{ transform: "translateX(540px)" }}
        alt="Ajayan Holding the Lamp"
        className="ajayan-image mt-5"
      />

      {/* Background Image */}
      <img
        src={greetingsBg}
        alt="Background"
        className="absolute top-0 left-0 w-screen h-screen object-cover -z-10"
      />
    </div>
  );
};

export default Greetings;
