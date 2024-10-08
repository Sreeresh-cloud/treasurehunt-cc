import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Ascii.css"; // Import CSS for fade-in animations

import cave1 from "../images/cave1.png";
import cave2 from "../images/cave2.png";
import ajayanSad from "../images/ajayanSad.png";

const Ascii = () => {
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [showContent, setShowContent] = useState(true);

  // Fade-in text display states
  const [fadeInText1, setFadeInText1] = useState(true);
  const [fadeInText2, setFadeInText2] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  // Handle input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Handle clue button click
  const playAudio = () => {
    const audio = new Audio("/CheenTapak.mp3"); // Adjust the path to your audio file
    audio.play();
  };

  // Check if the input is correct
  const handleSubmit = () => {
    if (userInput === "991041011011103211697112971073210011710932100117109") {
      setShowContent(false);
      setStep(1);
      // setTimeout(() => {
      //   navigate("/Direction"); // Navigate to Direction.js after a timeout
      // }, 6000); // Navigate after 1 second delay for user experience
    } else {
      alert("Incorrect code. Try again!");
    }
  };

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setFadeInText1(false);
      setFadeInText2(true);
    }, 7000); // Show first text for 7 seconds

    return () => clearTimeout(timeout1); // Cleanup on unmount
  }, []);

  return (
    <div className="text-white flex justify-center items-center w-screen h-screen">
      {showContent && (
        <div>
          {fadeInText1 && (
            <div className={`fade-in`}>
              <p className=" bg-black bg-opacity-60 p-5 rounded-2xl ">
                But, Before Ajayan sets out to the cave, a somber expression
                crosses the ghost's face as it explains that it is the guardian
                of the cave and hence cannot allow Ajayan to enter. Bound by the
                chains of its ghostly existence, it reveals that only by
                breaking the curse can it allow him inside.
              </p>
            </div>
          )}
          {fadeInText2 && (
            <div className={`fade-in`}>
              <p>
                To free the ghost, Ajayan must utter a spell in ASCII code. The
                ghost only understands ASCII code. The ghost explains that each
                character of the phrase corresponds to a specific ASCII value,
                which when uttered together will release it from its ethereal
                bonds. Help Ajayan to convert the spell into ASCII code, so he
                can set the ghost free and gain entry into the cave.
              </p>
              <button onClick={playAudio}>
 !Hint!
</button>              <div>
                <p>Use the clue below:</p>
                <ul>
                  <li>u: 117</li>
                  <li>(space): 32</li>
                  <li>t: 116</li>
                  <li>e: 101</li>
                  <li>d: 100</li>
                  <li>m: 109</li>
                  <li>h: 104</li>
                  <li>a: 97</li>
                  <li>n: 110</li>
                  <li>k: 107</li>
                  <li>p: 112</li>
                  <li>c: 99</li>
                </ul>
                <input
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  placeholder="Enter ASCII code"
                  className="text-black outline-none"
                />
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          )}
        </div>
      )}
      {!showContent && step === 1 && (
        <div>
          <p>
            Freed from its earthly bonds, the ghost gratefully hands Ajayan a
            map, outlining the path to the magical lamp hidden deep within the
            long, winding cave. With determination, Ajayan steps into the cave's
            depths.
          </p>
          <button onClick={() => navigate("/Direction")}>Into the Cave</button>
        </div>
      )}

      <img
        src={cave1}
        className="absolute top-0 left-0 w-screen h-screen -z-10"
      ></img>
      <img
        src={cave1}
        className="absolute top-0 left-0 w-screen h-screen -z-10"
      ></img>
      <img
        src={ajayanSad}
        className="absolute bottom-0 right-96 -scale-x-100 -z-10"
      ></img>
    </div>
  );
};

export default Ascii;
