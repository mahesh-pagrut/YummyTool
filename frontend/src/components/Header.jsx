// src/components/Header.jsx
import React, { useState } from 'react';

const Header = ({ activeTab, setActiveTab }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-md group hover:scale-105 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white group-hover:text-yellow-300 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m2 8H7a2 2 0 01-2-2V7a2 2 0 012-2h2l1-2h4l1 2h2a2 2 0 012 2v11a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
            YummyTool
          </h1>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-purple-600 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-md"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${showMenu ? 'block' : 'hidden'
            }`}
        >
          {['recipe', 'meal-plan', 'saved'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setShowMenu(false);
              }}
              className={`block md:inline px-4 py-2 rounded-full transition-all text-center ${activeTab === tab
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:text-purple-600'
                }`}
            >
              {tab === 'recipe'
                ? 'Recipe Generator'
                : tab === 'meal-plan'
                  ? 'Meal Planner'
                  : 'Saved Recipes'}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
