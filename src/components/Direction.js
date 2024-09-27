import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Direction.css"; // Import your CSS for styling

import cave3 from "../images/cave3.jpg";

const Direction = () => {
  const [showContent, setShowContent] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [fadeInText1, setFadeInText1] = useState(true);
  const [fadeInText2, setFadeInText2] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  // Fade-in text display states
  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setFadeInText1(false);
      setFadeInText2(true);
    }, 7000); // Show first text for 7 seconds

    return () => clearTimeout(timeout1); // Cleanup on unmount
  }, []); // Empty dependency array ensures this runs once when component mounts

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    setError(""); // Clear error on input change
  };

  // Handle answer submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === "36") {
      setShowContent(false);
      setTimeout(() => {
        navigate("/climax"); // Navigate to Climax.js after a timeout
      }, 1000); // Navigate after 1 second delay for user experience
    } else {
      setError("Wrong Answer, Try Again");
    }
  };

  return (
    <div className="direction-container">
      {showContent && (
        <div>
          {fadeInText1 && (
            <div className="fade-in  bg-black bg-opacity-40 p-5 rounded-2xl">
              Ajayan enters the Cave having the map given by the Ghost. However,
              despite his efforts to follow the ghost's map, the intricate maze
              of tunnels proves to be more challenging than anticipated. Before
              long, he finds himself disoriented and lost within the massive
              cave. Now, Ajayan must figure out his location relative to the
              entrance to recenter himself and continue his quest for the lamp.
            </div>
          )}
          {fadeInText2 && (
            <div className="fade-in  bg-black bg-opacity-40 p-5 rounded-2xl">
              <h2>Here is the scenario</h2>
              <p>
                On entering the cave, Ajayan faced north. Ajayan walked 20 m
                towards north. Then he turned right and walked 30 m. Then he
                turns right and walks 35 m. Then he turns left and walks 15 m.
                Finally, he turns left and walks 15 m. In which direction and
                how many metres is he from the starting position?
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  className="text-black outline-none"
                  placeholder="Type your answer here..."
                  required
                />
                <button type="submit">Submit</button>
              </form>
              {error && <p className="error-message">{error}</p>}
            </div>
          )}
        </div>
      )}

      <img
        src={cave3}
        className="absolute top-0 left-0 w-screen h-screen -z-10"
      ></img>
    </div>
  );
};

export default Direction;
