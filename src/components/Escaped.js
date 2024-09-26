import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "./Escaped.css"; // Add custom CSS
import maniyanCrowded2 from "../images/maniyanCrowded2.jpg";

const Escaped = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleNext = () => {
    // You can navigate to the next page or action
    navigate("/shrine-door"); // Navigate to the ShrineDoor component
  };

  return (
    <div className="p-10 w-screen flex">
      <div className="bg-black bg-opacity-60 text-white p-5 rounded-2xl w-full">
        <h1>Maniyan Escaped!</h1>
        <p>Maniyan successfully escaped from the attacking crowd.</p>

        {/* Next button for further action */}
        <button onClick={handleNext} className="next-button">
          Next
        </button>
      </div>

      <img
        src={maniyanCrowded2}
        className="absolute top-0 left-0 w-screen h-screen -z-10"
      ></img>
    </div>
  );
};

export default Escaped;
