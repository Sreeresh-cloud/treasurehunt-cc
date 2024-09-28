import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import "./MorseCode.css"; // Custom styling
import MorseCodeBg from "../images/morseCodeBg.jpg";
import ajayan from "../images/ajayan.png";
import lakshmi from "../images/lakshmi.png"

const MorseCode = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false); // State to track correctness
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.toLowerCase() === "you are the way") {
      setMessage(
        "Successfully Decoded. Ajayan finds the lamp inside a cave in the Tortoise forest."
      );
      setIsCorrect(true); // Set to true when the answer is correct
    } else {
      setMessage("Incorrect answer. Please try again.");
      setIsCorrect(false); // Set to false for incorrect answers
    }
  };

  const handleTravel = () => {
    navigate("/river"); // Navigate to River component
  };

  return (
    <div className="morsecode-container" >
      {!isCorrect && (
        <div className="bg-black bg-opacity-70 rounded-2xl p-5 w-1/2 text-white sm:mr-20"   style={{ transform: 'translateX(40px)' }}>
          <div className="morsecode-stor">
            <p>
              Ajayan, a skilled radio mechanic living in a small village, hears
              whispers of a magical lamp hidden nearby. Intrigued and
              determined, he decides to embark on a quest to find it.
            </p>
            <p>
              Before he sets off, his beloved Lakshmi writes him a letter in
              morse code to guide him on his journey. Decode this morse code:
            </p>
          </div>
          <p>Ajayan finds a morse code written in the letter sent by Lakshmi</p>
          <strong>
            The Morse Code: -.-- --- ..- / .- .-. . / - .... . / .-- .- -.--
          </strong>
          <input
            type="text"
            className="morsecode-input outline-none"
            value={input}
            onChange={handleChange}
            placeholder="Enter your answer here"
          />
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
      {message && (
        <div className="bg-black bg-opacity-70 rounded-2xl p-5 w-1/2 text-white sm:mr-20"  style={{ transform: 'translateX(40px)' }}>
          {message && <div className="morsecode-message">{message}</div>}
          {/* Render the Travel button only if the answer is correct */}
          {isCorrect && (
            <button
            className="travel-button bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
            onClick={handleTravel}
          >
            Travel to Tortoise Forest
          </button>
          )}
        </div>
      )}
      <img
        src={MorseCodeBg}
        className="absolute top-0 left-0 w-screen h-screen -z-10"
      ></img>
      <img src={ajayan} className="absolute bottom-0 left-0 w-[27rem]"></img>
      <img src={lakshmi}className="absolute bottom-0 right-0 w-[27rem] h-[40rem] transform scale-x-[-1]"></img>
    </div>
  );
};

export default MorseCode;
