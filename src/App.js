import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Introduction from "./components/introduction";
import Level1 from "./components/level1";
import Level2 from "./components/Level2";
import Level3 from "./components/Level3";
import SuccessPage from "./components/SuccessPage";
import LocationIntroduction from "./components/LocationIntroduction";

const App = () => {
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    console.log("playing audio");

    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  // useEffect(() => {
  //   handlePlayAudio();
  //   if (audioRef.current) {
  //     audioRef.current.volume = 1.0; // Set volume to 50%
  //   }
  // }, []);

  return (
    <Router>
      <div className="w-screen h-screen text-black">
        <audio ref={audioRef} src="/audio/bgm.mp3" autoPlay loop />
        <Routes>
          <Route
            path="/"
            element={<HomePage isIntialised={handlePlayAudio} />}
          />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/locintro1" element={<LocationIntroduction />} />
          <Route path="/level1" element={<Level1 />} />
          <Route path="/level2" element={<Level2 />} />
          <Route path="/level3" element={<Level3 />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
