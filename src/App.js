// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './components/pages/Home';
import Enhance from './components/pages/Enhance';
import About from './components/pages/About';
import './index.css'; // Ensure Tailwind CSS styles are applied

const App = () => {
  return (
    <Router>
      {/* <Navbar /> Add Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enhance" element={<Enhance />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
