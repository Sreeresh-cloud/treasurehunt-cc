import React, { useState, useEffect } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import "./JigsawPuzzle.css"; // Import your custom CSS
import { useNavigate } from "react-router-dom"; // Import useNavigate

import puzzleBg from "../images/puzzleBg.png";
import keluSad from "../images/keluSad.png";

const JigsawPuzzleComponent = () => {
  const [isSolved, setIsSolved] = useState(false); // To track if the puzzle is solved
  const [showLamp, setShowLamp] = useState(false); // To track when to show the lamp
  const [showMessage, setShowMessage] = useState(false); // To track when to show the message
  const [messageClass, setMessageClass] = useState(""); // For message animation
  const [keluClass, setKeluClass] = useState(""); // For Kelu image animation
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSolved = () => {
    setIsSolved(true); // Set the puzzle as solved
    setTimeout(() => {
      setShowLamp(true); // Show the lamp after the puzzle falls
      setTimeout(() => {
        setShowMessage(true); // Show the message after the lamp is revealed
        setMessageClass("show"); // Add class for message animation
      }, 1000); // Delay for a moment before showing the message
    }, 1500); // Delay for the fall animation to complete
  };

  const handleNext = () => {
    navigate("/level2"); // Navigate to the Level 2 page
  };

  useEffect(() => {
    // Show Kelu's image with animation
    if (showMessage) {
      setKeluClass("show");
    }
  }, [showMessage]);

  return (
    <div className="app-container">
      <h1 className="font-bold text-white p-2 px-4 bg-black bg-opacity-60 rounded-2xl">
        The Room is lit up.Kelu needs to solve the puzzle to reveal the lamp
      </h1>

      {/* Jigsaw puzzle container with falling animation */}
      <div
        className={`jigsaw-container bg-black bg-opacity-90 rounded-2xl p-2 ${
          isSolved ? "falling-puzzle hidden" : ""
        }`}
      >
        <JigsawPuzzle
          imageSrc="/python.webp" // Ensure this image is in the public folder
          rows={3}
          columns={3}
          onSolved={handleSolved}
        />
      </div>

      {/* Message displayed after revealing the lamp */}
      {showMessage && (
        <div
          className={`absolute bottom-20 message-container bg-black bg-opacity-60 rounded-2xl p-2 text-white flex flex-col items-center justify-center ${messageClass}`}
        >
          <h2 className="font-semibold text-[20px]">
          But, As Kelu approackes, he realizes it's a clever trap set by the cunning king of the palace.
          </h2>
          <h3 className="font-semibold text-[20px]">
          This lamp is not the real treasure he seeks          </h3>
          <h3 className="font-semibold text-[20px]">
          Despite this setback, Kunjikelu knows he has made great progress.</h3>
          <h3 className="font-semibold text-[20px]">
          Congrats, You’ve completed the first level!</h3>
          <button onClick={handleNext} className="next-button">
            Next
          </button>
        </div>
      )}
      <img
        src={puzzleBg}
        className="absolute top-0 left-0 w-screen h-screen -z-10"
        alt="Background"
      />
      <img
        src={keluSad}
        className={`absolute left-0 bottom-0 z-50 keluSad ${keluClass}`}
        alt="Kelu Sad"
      />
    </div>
  );
};

export default JigsawPuzzleComponent;
