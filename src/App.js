// App.js
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Introduction from "./components/introduction";
import Level1 from "./components/level1";
import Level2 from "./components/Level2";
import Level3 from "./components/Level3";
import SuccessPage from "./components/SuccessPage";
import LocationIntroduction from "./components/LocationIntroduction";
import JigsawPuzzlecomponent from "./components/JigsawPuzzle";
import Escape from "./components/Escape";
import Escaped from "./components/Escaped";
import ShrineDoor from "./components/ShrineDoor";
import ShrineDoorLocked from "./components/ShrineDoorLocked";
import ShrineDarkRoom from "./components/ShrineDarkRoom";
import MorseCode from "./components/MorseCode";
import River from "./components/River";
import MagicalBridge from "./components/MagicalBridge";
import Ascii from "./components/Ascii";
import Direction from "./components/Direction";
import Climax from "./components/Climax";
import Greetings from "./components/Greetings";
import RotateToLandscape from "./components/RotateToLandscape"; // Import the RotateToLandscape component

const App = () => {
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    console.log("playing audio");

    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    // Function to check if the device is mobile and in portrait mode
    const checkMobilePortrait = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      const isMobile = window.innerWidth <= 768; // Adjust this value as needed
      setIsMobilePortrait(isMobile && isPortrait);
    };

    // Check initially and add resize event listener
    checkMobilePortrait();
    window.addEventListener("resize", checkMobilePortrait);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkMobilePortrait);
    };
  }, []);

  return (
    <Router>
      <div className="font-mono">
        <audio ref={audioRef} src="/audio/bgm.mp3" autoPlay loop />
        {isMobilePortrait ? (
          // Show the "Rotate to Landscape" page only in mobile portrait mode
          <RotateToLandscape />
        ) : (
          // Show the routes when in landscape mode or on larger screens
          <Routes>
            <Route
              path="/"
              element={<HomePage isIntialised={handlePlayAudio} />}
            />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/locintro1" element={<LocationIntroduction />} />
            <Route path="/level1" element={<Level1 />} />
            <Route path="/jigsaw-puzzle" element={<JigsawPuzzlecomponent />} />
            <Route path="/level2" element={<Level2 />} />
            <Route path="/escape" element={<Escape />} />
            <Route path="/escaped" element={<Escaped />} />
            <Route path="/shrine-door" element={<ShrineDoor />} />
            <Route path="/shrine-door-locked" element={<ShrineDoorLocked />} />
            <Route path="/shrine-dark-room" element={<ShrineDarkRoom />} />
            <Route path="/level3" element={<Level3 />} />
            <Route path="/morsecode" element={<MorseCode />} />
            <Route path="/river" element={<River />} />
            <Route path="/magical-bridge" element={<MagicalBridge />} />
            <Route path="/ascii" element={<Ascii />} />
            <Route path="/direction" element={<Direction />} />
            <Route path="/climax" element={<Climax />} />
            <Route path="/greetings" element={<Greetings />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
