import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Climax.css"; // Import your CSS for styling

const Climax = () => {
  const [currentText, setCurrentText] = useState(0); // Track current text index
  const [showButton, setShowButton] = useState(false); // Track button visibility
  const texts = [
    "Congrats, You helped solve Ajayan's confusion. Ajayan takes a moment to collect his thoughts, focusing on the faint markings of the map in his mind. As he surveys the surroundings, a sense of familiarity washes over him, and he realizes he is very close to the spot indicated on the map. With renewed determination, he follows the winding path, guided by an inexplicable intuition.",
    "As he approaches a dimly lit chamber deep within the cave, the air feels charged with energy. Shadows dance along the walls, flickering as if alive. In the center of the chamber, on a pedestal shrouded in mist, sits the magical lamp. Its surface gleams with an otherworldly glow, pulsing softly in the darkness, whispering secrets of ancient power.",
    "Ajayan steps forward, the lamp calling to him with a magnetic pull. He reaches out, fingers brushing against the cool surface, feeling a rush of warmth and light. The air thickens with anticipation as he prepares to claim his prize.",
    "With a deep breath, Ajayan reaches out and grasps the lamp, feeling a surge of energy coursing through him. As he holds it aloft, the chamber fills with a radiant light, illuminating the path ahead. The lamp, a symbol of hope and adventure, promises new beginnings and endless possibilities. Ajayan knows he has not only found a treasure but has also uncovered the strength within himself to face any challenge.",
  ];
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (currentText < texts.length) {
      const timer = setTimeout(() => {
        // When displaying the fourth text, show the button and stop advancing
        if (currentText === texts.length - 1) {
          setShowButton(true); // Show button for the fourth text
        } else {
          setCurrentText((prev) => prev + 1); // Move to the next text
        }
      }, 7000); // 7 seconds duration for each text

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [currentText, texts.length]); // Dependency array to re-run effect

  const handleLiftLamp = () => {
    navigate("/greetings");
  };

  return (
    <div className="climax-container">
      <div className={`fade-in`}>
        <p>{texts[currentText]}</p>
      </div>
      {currentText === texts.length - 1 && showButton && (
        <button onClick={handleLiftLamp} className="lift-lamp-button">
          Lift the Lamp
        </button>
      )}
    </div>
  );
};

export default Climax;
