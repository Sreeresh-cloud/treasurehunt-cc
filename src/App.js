import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Introduction from './components/introduction';
import Level1 from './components/level1';
import Level2 from './components/Level2';
import Level3 from './components/Level3';
import SuccessPage from './components/SuccessPage';
import LocationIntroduction from './components/LocationIntroduction';
import JigsawPuzzle from './components/JigsawPuzzle';

const App = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1.0; 
    }
  }, []);

  return (
    <Router>
      <div>
        <audio ref={audioRef} src="/audio/bgm.mp3" autoPlay loop />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/locintro1" element={<LocationIntroduction />} />
          <Route path="/level1" element={<Level1 />} />
          <Route path="/jigsaw-puzzle" element={<JigsawPuzzle />} />
          <Route path="/level2" element={<Level2 />} />
          <Route path="/level3" element={<Level3 />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;