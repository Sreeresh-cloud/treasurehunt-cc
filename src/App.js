import React, { useEffect, useRef } from "react";
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
import Image from "./components/image";

const App = () => {
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    console.log("playing audio");

    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <Router>
      <div className="font-mono">
        <audio ref={audioRef} src="/audio/bgm.mp3" autoPlay loop />

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
          <Route path="/shrine-door" element={<ShrineDoor />} />{" "}
          {/* Add ShrineDoor route */}
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
      </div>
    </Router>
    // <div>
    //   <Image/>
    // </div>
  );
};

export default App;
