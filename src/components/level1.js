import React, { useState } from "react";
import "./Level1.css";
import DarkRoom from "./DarkRoom"; // Import the DarkRoom component
import doubleDoor from '../images/doubleDoor.jpg';

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
        <div className={`door-overlay w-full h-full`}>
          <div
            className={`door-container ${pinEntered ? "door-unlocked" : ""}`}
          >
            <img
              src={doubleDoor}
              alt={pinEntered ? "Unlocked Door" : "Locked Door"}
              className={`absolute clip-half-left h-full door-left transition-transform duration-[3s] ${
                doorSliding ? "animate-openLeft" : ""
              }`}
            />
            <img
              src={doubleDoor}
              alt={pinEntered ? "Unlocked Door" : "Locked Door"}
              className={`absolute clip-half-right h-full door-right transition-transform duration-[3s] right-0 ${
                doorSliding ? "animate-openRight" : ""
              }`}
            />
          </div>

          {!pinEntered && (
            <div className="input-container w-full">
              <h1 className="-mt-14 sm:-mt-2 font-bold text-[20px]" style={{ color: '#FFA500' }}>
                The door is locked tight. Help Kelu break through this door and reach the lamp!
              </h1>

              <input
                type="text"
                placeholder="Find hidden pin hint"
                className="text-black mt-[29rem] sm:mt-[26rem] bg-opacity-30"
                onChange={handlePinInput}
              />
            </div>
          )}
        </div>
      )}

      {/* Conditionally render the DarkRoom component */}
      {showDarkRoom && <DarkRoom />}

      {/* Always show the hint button */}
      <button
        onClick={() => window.open("https://google.com/404.html", "_blank")}
       className="absolute text-white bg-orange-500 hover:bg-orange-600 transition-all py-2 px-4 rounded z-50"
      >
        Hint
      </button>
    </div>
  );
};

export default Level1;
