// src/components/Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home-section" className="text-xl font-bold text-gray-800">
              ISRO EPSR
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#home-section" className="text-gray-600 hover:text-blue-600">
              Home
            </a>
            <a href="#enhance-section" className="text-gray-600 hover:text-blue-600">
              Enhance
            </a>
            <a href="#about-section" className="text-gray-600 hover:text-blue-600">
              About
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
