import React from 'react';

const OurHistory = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-green-600 mb-2">OUR HISTORY</h2>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Better Website Means A User Experience</h1>
        <p className="text-gray-600 mb-6">
          Ipsum is the result of synergy between our teams and our customers. Our company culture is focused on
          excellent productivity, customer satisfaction, respect for team and individual achievements.
        </p>
      </div>
      <div className="relative">
        <img
          src="/public/Images/Image.png" 
          alt="Team working"
          className="rounded-lg object-cover w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white p-4 rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9l-6.5 3.25 6.5 3.25V9z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
