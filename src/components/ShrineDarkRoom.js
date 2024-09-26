import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ShrineDarkRoom.css";

import darkRoom from "../images/darkRoom.png";
import lightRoom from "../images/lightRoom.png";
import vilakku from "../images/vilakku.png";
import maniyanSad from "../images/maniyanSad.png";

const ShrineDarkRoom = () => {
  const [inputValue, setInputValue] = useState("");
  const [questionVisible, setQuestionVisible] = useState(false);
  const [roomLightened, setRoomLightened] = useState(false);
  const [lampVisible, setLampVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.transition = "background-color 2s ease";
    document.body.style.backgroundColor = "black";

    setTimeout(() => {
      setQuestionVisible(true);
    }, 2000);

    return () => {
      document.body.style.transition = "";
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (parseFloat(inputValue) === 3.1) {
      // Convert to float for comparison
      document.body.style.transition = "background-color 2s ease";
      document.body.style.backgroundColor = "#f5f5f5";

      setRoomLightened(true);
      // setQuestionVisible(false)
      setTimeout(() => {
        setLampVisible(true);
        setTimeout(() => {
          setTextVisible(true);
        }, 1000);
      }, 2000);
    } else {
      alert("Incorrect current value! Try again.");
    }
  };

  const handleNextClick = () => {
    navigate("/level3");
  };

  return (
    <div className={`shrine-dark-room ${questionVisible ? "fade-in" : ""}`}>
      {questionVisible && !roomLightened && (
        <div className="question-container">
          <h1>Welcome to the Dark Room</h1>
          <p>
            The light inside the room is taken out by the magnetic field,
            nullify the Magnetic Field using a wire with the right resistance,
            to find the lamp.
          </p>
          <h2>
            The circular loop of wire with a radius of 0.25m produces a magnetic
            field of 7.85 × 10^-6 T at its center. Calculate the current flowing
            through the loop. (Use r = 3.14)
          </h2>
          <form onSubmit={handleQuestionSubmit}>
            <input
              type="number" // Change to number type for float input
              step="0.01" // Allow decimal values
              placeholder="Ampere"
              value={inputValue}
              onChange={handleInputChange}
              className="answer-input text-black"
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          {/* Echoing Effect: Displaying the current input value below the input field */}
          {/* <div className="echo-display">{inputValue}</div> */}
        </div>
      )}
      {roomLightened && (
        <div
          className={`room-light bg-black bg-opacity-50 rounded-2xl p-10   ${
            lampVisible ? "lamp-visible" : ""
          }`}
        >
          {lampVisible && (
            <>
              <img
                src={vilakku} // Replace with your lamp image path
                alt="Lamp"
                className="lamp-image"
              />
              {textVisible && (
                <>
                  <p className="fade-in-text text-white">
                    Finally, Maniyan Finds the Lamp.
                  </p>
                  <p className="fade-in-text text-white">
                    Oops, But the Lamp is fake
                  </p>
                  <button className="next-button" onClick={handleNextClick}>
                    Next
                  </button>
                </>
              )}
            </>
          )}
        </div>
      )}

      <img
        src={roomLightened ? lightRoom : darkRoom}
        className="absolute top-0 left-0 w-screen h-screen -z-10"
      ></img>
      {textVisible && (
        <img src={maniyanSad} className="absolute left-0 bottom-0"></img>
      )}
    </div>
  );
};

export default ShrineDarkRoom;
