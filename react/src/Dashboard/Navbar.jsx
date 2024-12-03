import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/013/923/543/small/blue-car-logo-png.png" alt="Car Tech India" className="h-8" />
          <span className="text-blue-700 font-bold text-lg">CAR TECH INDIA</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-800 hover:text-blue-700">Home</a>
          <a href="#" className="text-gray-800 hover:text-blue-700">Buy Car</a>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
          <button className="text-gray-800 hover:text-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405M19 13h.01M13 5h.01M7 7h.01M3 11h.01M3 19h18"
              />
            </svg>
          </button>
          <img src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg" alt="Profile" className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
