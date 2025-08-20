import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SeasonDetails from './pages/SeasonDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/season/:year" element={<SeasonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
