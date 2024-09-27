import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./MagicalBridge.css"; // Custom styling

import bridge1 from "../images/bridge1.jpg";
import bridge2 from "../images/bridge2.png";
import ajayanSad from "../images/ajayanSad.png";

const MagicalBridge = () => {
  const [showContent, setShowContent] = useState(true);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [showPuzzle, setShowPuzzle] = useState(false); // State to control puzzle visibility
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message

  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle the button click
  const handleGoNearBridge = () => {
    setShowContent(false);
    // Play audio here
    const audio = new Audio("/ghost.mp3"); // Replace with your audio file path
    audio.play();

    // Set message after a brief delay to allow audio to play
    setTimeout(() => {
      setMessage(
        "However, just as he approaches its entrance, a ghost materializes before him, blocking the way. " +
          "With a haunting voice, the ghost declares that entry onto the bridge is forbidden unless Ajayan can solve its puzzle. Help Ajayan Solve the Puzzle:"
      );

      // Set an additional timeout to show the puzzle content after the ghost message
      setTimeout(() => {
        setShowPuzzle(true); // Show puzzle content after an additional delay
      }, 5000); // 5 seconds delay for puzzle visibility
    }, 3000); // Adjust time based on audio length if necessary
  };

  const handleSubmit = () => {
    setErrorMessage(""); // Clear any previous error message

    if (input === "17") {
      setPuzzleSolved(true);
      setShowPuzzle(false); // Hide puzzle content on submit
      console.log("solved...");
      setMessage(
        "Hurray, You have helped Ajayan solve the Puzzle. Impressed by Ajayan's wit, the ghost grants him access to the bridge and leads him to the entrance of a dark cave, where the magical lamp is said to be hidden."
      );
    } else {
      // Set the error message below the input field for incorrect answer
      console.log("wrong");
      setErrorMessage("Wrong answer! Try again!");
    }
  };

  const handleGoToCave = () => {
    navigate("/ascii"); // Navigate to the Ascii page
  };

  return (
    <div className="magical-bridge-container">
      {showContent && (
        <div className="flex flex-col justify-center items-center bg-black bg-opacity-60 p-5 rounded-2xl text-white">
          <p>
            As Ajayan carefully walks along the riverbanks, he discovers an old
            bridge arching overhead.
          </p>
          <button className="go-near-button" onClick={handleGoNearBridge}>
            Go Near Bridge
          </button>
        </div>
      )}

      {!showContent && (
        <div className="flex flex-col justify-center items-center bg-black bg-opacity-60 p-5 rounded-2xl text-white">
          <p>{message}</p>
          {showPuzzle && ( // Render puzzle content only if showPuzzle is true
            <>
              <p>
                Four people need to cross a rickety bridge at night. The bridge
                can only hold two people at a time, and they have one torch that
                must be carried back and forth for anyone to cross. Each person
                walks at a different speed:
              </p>
              <ul>
                <li>Person 1 can cross the bridge in 1 minute.</li>
                <li>Person 2 can cross the bridge in 2 minutes.</li>
                <li>Person 3 can cross the bridge in 5 minutes.</li>
                <li>Person 4 can cross the bridge in 10 minutes.</li>
              </ul>
              <p>
                When two people cross together, they must go at the slower
                person’s pace. What is the shortest amount of time all four
                people can cross the bridge?
              </p>
              <input
                type="text"
                className="puzzle-input text-black"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your answer here"
              />
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
              {/* Display error message */}
            </>
          )}
        </div>
      )}

      {puzzleSolved && (
        <>
          {/* <p>{message}</p> */}
          <button className="go-to-cave-button z-50" onClick={handleGoToCave}>
            Go To Cave
          </button>
        </>
      )}

      <img
        src={showContent ? bridge1 : bridge2}
        className="absolute top-0 left-0 w-screen h-screen -z-10"
      ></img>
      <img
        src={ajayanSad}
        className="absolute bottom-0 left-60 -scale-x-100 -z-10"
      ></img>
    </div>
  );
};

export default MagicalBridge;
