import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
//import './Escape.css'; // Import CSS for the escape page
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
      alert('Incorrect input! Try "escape" or "esc".'); // Alert if the input is incorrect
    }
  };

  return (
    <div className="flex w-screen h-screen items-end p-10">
      <div className="bg-black bg-opacity-60 rounded-2xl p-5 w-1/2">
        <h1 className="font-bold">Escape: The Attack</h1>
        <p className="text-white">
          Maniyan is surrounded by a group of attacking villagers! He needs to
          escape before it's too late. Help Maniyan find a way out...
        </p>

        {/* Form for entering escape input */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="A keyword to go back"
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
        className="absolute top-0 left-0 w-screen h-screen -z-10"
      ></img>
    </div>
  );
};

export default Escape;
