// River.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./River.css"; // Custom styling

import ajayanSad from '../images/ajayanSad.png'
import riverBg from "../images/riverBg.jpg";

const River = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [showContent, setShowContent] = useState(true);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [finalInput, setFinalInput] = useState("");
  const [firstQuestion, setFirstQuestion] = useState(false);
  const [secondQuestion, setSecondQuestion] = useState(false);
  const [thirdQuestion, setThirdQuestion] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleTravelButtonClick = () => {
    setShowContent(false);
    setFirstQuestion(true);
  };

  const handleSubmit = () => {
    if (input === "4.5") {
      setFirstQuestion(false);
      setSecondQuestion(true);
      setErrorText("");
      setMessage(
        "What can Ajayan conclude about the nature of the river from this calculation?"
      );
    } else if (3.5 <= parseFloat(input) && parseFloat(input) <= 5.5) {
      setErrorText("You'r close. Keep trying...");
    } else {
      setErrorText("Oops. You are getting it wrong.");
    }
  };

  const handleFinalSubmit = () => {
    if (finalInput.toLowerCase().includes("acid")) {
      setSecondQuestion(false);
      setThirdQuestion(true);
      setErrorText("");

      setMessage(
        "Yes, You have helped Ajayan find out that the river is acidic. Now, Ajayan has to find some other way to cross the river."
      );
    } else {
      setErrorText(
        "Try again. What can Ajayan conclude about the nature of the river?"
      );
    }
  };

  const handleFindWay = () => {
    navigate("/magical-bridge"); // Navigate to MagicalBridge component using useNavigate
  };

  return (
    <div className="river-container">
      {showContent && (
        <div className="w-2/3  bg-black bg-opacity-40 p-5 rounded-2xl">
          <p className="text-white">
            Ajayan continues on his journey, only to encounter a river blocking
            his path. As he peers into the murky waters, an unsettling feeling
            washes over him. Sensing something amiss, he investigates further
            and discovers that the water is acidic. Find out by helping him
            calculate the pH of the river water.
          </p>
          <button className="help-button" onClick={handleTravelButtonClick}>
            Help Ajayan
          </button>
        </div>
      )}
      {firstQuestion && (
        <div className="w-2/3  bg-black bg-opacity-40 p-5 rounded-2xl">
          <div>
            Hydrogen ion concentration of the water is 3.16 × 10^−5. Calculate
            the pH of the solution.
          </div>
          <input
            type="text"
            className="river-input text-black outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your pH calculation here"
          />
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
      {secondQuestion && (
        <div className="w-2/3  bg-black bg-opacity-40 p-5 rounded-2xl">
          <div>
            What can Ajayan conclude about the nature of the river from this
            calculation?
          </div>
          <input
            type="text"
            className="final-input text-black outline-none"
            value={finalInput}
            onChange={(e) => setFinalInput(e.target.value)}
            placeholder="Enter your conclusion here"
          />
          <button className="final-submit-button" onClick={handleFinalSubmit}>
            Submit
          </button>
        </div>
      )}
      {thirdQuestion && (
        <div className="w-2/3  bg-black bg-opacity-40 p-5 rounded-2xl">
          <div>
            Yes, You have helped Ajayan find out that the river is acidic. Now,
            Ajayan has to find some other way to cross the river.
          </div>

          <button className="find-way-button" onClick={handleFindWay}>
            Find Way
          </button>
        </div>
      )}
      {errorText && (
        <div className="text-red-500 bg-black bg-opacity-65 mt-5 p-2">
          {errorText}
        </div>
      )}
      <img
        src={riverBg}
        className="absolute top-0 left-0 w-screen h-screen -z-10"
      ></img>
      <img
        src={ajayanSad}
        className="absolute bottom-0 right-0 w-96  -z-10"
      ></img>
    </div>
  );
};

export default River;
