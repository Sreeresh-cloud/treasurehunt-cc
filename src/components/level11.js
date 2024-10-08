import React, { useState } from "react";
import lockedDoorImage from "../images/locked-door.png";
import unlockedDoorImage from "../images/unlocked-door.png";
import "./Level1.css";
import DarkRoom from "./DarkRoom"; // Import the DarkRoom component

const Level1 = () => {
  const [pinEntered, setPinEntered] = useState(false);
  const [doorSliding, setDoorSliding] = useState(false);
  const [showDarkRoom, setShowDarkRoom] = useState(false); // Control the rendering of DarkRoom

  const handlePinInput = (e) => {
    if (e.target.value === "404") {
      setPinEntered(true);
      setTimeout(() => {
        setDoorSliding(true);
        setTimeout(() => {
          setShowDarkRoom(true); // Show DarkRoom after the door slides out
        }, 1500); // Adjust this duration to match the slide-out animation
      }, 1000); // Start sliding after 1 second
    }
  };

  return (
    <div className="level1 w-screen h-screen">
      {/* Render the door and overlay only if DarkRoom is not shown */}
      {!showDarkRoom && (
        <div
          className={`door-overlay w-full h-full ${
            doorSliding ? "slide-out" : ""
          }`}
        >
          <div
            className={`door-container ${pinEntered ? "door-unlocked" : ""}`}
          >
            <img
              src={pinEntered ? unlockedDoorImage : lockedDoorImage}
              alt={pinEntered ? "Unlocked Door" : "Locked Door"}
              className="door-image"
            />
            <img>
            </img>
          </div>

          {!pinEntered ? (
            <div className="input-container w-full">
              <h1 className="-mt-14 sm:-mt-2 font-bold">Level 1: The Closed Door</h1>
              {/* <p className="mt-96">Enter pin to open:</p> */}

              <input
                type="text"
                placeholder="Find hidden pin hint"
                // placeholder="Enter PIN to unlock"
                className="text-black mt-[29rem] sm:mt-[26rem] bg-opacity-30"
                onChange={handlePinInput}
              />
            </div>
          ) : (
            <div className="unlocking-message">
              <h1>The door is opening...</h1>
            </div>
          )}
        </div>
      )}

      {/* Conditionally render the DarkRoom component */}
      {showDarkRoom && <DarkRoom />}

      <button
        onClick={() => window.open("https://http.cat/404", "_blank")}
        // style={{ marginBottom: "10px" }}
        className="absolute top-[53%] right-[20%] sm:top-[23rem] sm:right-[41rem] text-white opacity-15 cursor-pointer hover:scale-[1.01] transition-all z-50"
      >
        Hint
      </button>
    </div>
  );
};

export default Level1;
