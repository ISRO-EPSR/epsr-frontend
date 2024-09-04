// src/pages/Home.js

import React, { useState } from 'react';
import Spline from '@splinetool/react-spline'; // Import the Spline component

const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div id="home-section" className="relative min-h-screen overflow-hidden">
      {/* Spline Object with Placeholder */}
      <div className="absolute inset-0">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 opacity-75">
            <div className="text-white">Loading Scene...</div>
          </div>
        )}
        <Spline
          scene="https://prod.spline.design/kMwFxGdOAZOZ1nR5/scene.splinecode"
          className="w-full h-full"
          onLoad={() => setLoading(false)} // Hide placeholder when scene is loaded
        />
      </div>

      {/* Content Over Spline Background */}
      <div className="absolute z-20 flex flex-col items-start min-h-screen pl-16 pt-20">
        <h1 className="text-8xl font-bold text-white mb-4">EPSR</h1>
        <p className="text-2xl text-white mb-8">Enhancing Lunar Images for Exploration</p>
      </div>
    </div>
  );
};

export default Home;
