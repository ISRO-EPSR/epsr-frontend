// src/pages/Home.js

import React, { useState } from 'react';
import Spline from '@splinetool/react-spline'; // Import the Spline component
import { Link } from 'react-router-dom'; // Import Link for navigation

const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Spline Object with Placeholder */}
      <div className="absolute inset-0">
        {loading && <div className="absolute inset-0 flex items-center justify-center bg-gray-800 opacity-75"><div className="text-white">Loading Scene...</div></div>}
        <Spline
          scene="https://prod.spline.design/9FY72VrPLGW-qr1p/scene.splinecode"
          className="w-full h-full"
          onLoad={() => setLoading(false)} // Hide placeholder when scene is loaded
        />
      </div>

      {/* Content Over Spline Background */}
      <div className="relative z-10 text-center text-white pt-16">
        <h1 className="text-8xl font-bold">EPSR</h1>
        <p className="mt-4 text-2xl">Enhancing Lunar Images for Exploration</p>

        {/* Navigation Buttons */}
        <div className="mt-8">
          <Link to="/enhance">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
              Go to Enhance
            </button>
          </Link>
          <Link to="/about" className="ml-4">
            <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
              Go to About
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
