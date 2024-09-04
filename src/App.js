// src/App.js

import React from 'react';
import Navbar from './components/NavBar/Navbar';
import Home from './components/pages/Home';
import Enhance from './components/pages/Enhance';
import About from './components/pages/About';
import './index.css'; // Ensure Tailwind CSS styles are applied

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Enhance />
      <About />
    </div>
  );
};

export default App;
