import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import "./Escape.css"; // Import CSS for the escape page
import maniyanCrowded from "../images/maniyanCrowded.jpg";

const Escape = () => {
  const [inputValue, setInputValue] = useState(""); // To store user input
  const navigate = useNavigate(); // For page navigation

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase()); // Convert input to lowercase to allow both 'escape' or 'esc'
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (
      inputValue === "escape" ||
      inputValue === "esc" ||
      inputValue === "ESCAPE" ||
      inputValue === "ESC"
    ) {
      navigate("/escaped"); // Navigate to the 'Escaped' page if the input is correct
    } else {
      alert('Incorrect input! .'); // Alert if the input is incorrect
    }
  };

  return (
    <div className="flex w-screen h-screen items-end p-10 fade-in"> {/* Apply the fade-in class */}
      <div className="bg-black bg-opacity-60 rounded-2xl p-5 w-1/2">
        <h1 className="font-bold text-white">Escape: The Attack</h1>
        <p className="text-white">
          As Maniyan enters the bustling market, he hopes his disguise will keep him hidden, but it doesn’t take long for the whispers to start. People recognize him, pointing and murmuring his name. Realizing he’s in danger and that he must escape from the locals quickly. Maniyan needs your help.
        </p>

        {/* Form for entering escape input */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="A key in the Keyboard"
            value={inputValue}
            onChange={handleInputChange}
            className="escape-input"
          />
          <button type="submit" className="escape-button">
            Submit
          </button>
        </form>
      </div>

      <img
        src={maniyanCrowded}
        className="absolute top-0 left-0 w-screen h-screen object-cover -z-10"
        alt="Crowded Market"
      />
    </div>
  );
};

export default Escape;
