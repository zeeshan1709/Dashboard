import React from "react";

const SearchBar = () => {
  return (
    <div className=" w-full max-w-xs mr-60 bg-white shadow-md rounded-lg p-4">
      <div className="flex mb-4">
        <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded-l-lg focus:outline-none">
          For Rent
        </button>
        <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-r-lg focus:outline-none">
          For Sale
        </button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Keywords"
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Location"
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
          <option>Type</option>
          <option>All</option>
          <option>House</option>
          <option>Apartment</option>
        </select>
      </div>
      <div className="mb-4">
        <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
          <option>Rooms</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="mb-4">
        <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
          <option>Bathrooms</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="mb-4">
        <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
          <option>Bedrooms</option>
          <option>All</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price Range</label>
        <input
          type="range"
          min="0"
          max="22000"
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Security Deposit</label>
        <input
          type="range"
          min="0"
          max="40000"
          className="w-full"
        />
      </div>
      <button className="bg-red-500 text-white w-full py-2 rounded-lg">
        Find Properties
      </button>
    </div>
  );
};

export default SearchBar;
