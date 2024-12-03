import React from "react";

const VideoCard = () => {
  return (
    <div className="w-full md:w-5/12 max-h-96 mx-auto mt-0 p-6 mb-80 md:ml-72 bg-white rounded-xl shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Video</h2>
      <div className="relative rounded-lg overflow-hidden">
        <img
          src="https://img.freepik.com/free-photo/japandi-living-room-interior-design_53876-145502.jpg"
          alt="Video Thumbnail"
          className="w-full max-h-60 object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-30 flex justify-center items-center">
          <button className="bg-red-500 text-white rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-6.84-3.908a.5.5 0 00-.752.432v7.616a.5.5 0 00.752.432l6.84-3.908a.5.5 0 000-.864z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-24 -mx-6 p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Property Details</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">Property ID:</span>
            <span>AVT1020</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Property Status:</span>
            <span className="text-gray-600">For Rent</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Price:</span>
            <span>₹32000</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Bedrooms:</span>
            <span>2</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Security Deposit:</span>
            <span>₹40000</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Bathrooms:</span>
            <span>2</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Year built:</span>
            <span>2022-12-11</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Balconies:</span>
            <span>2</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Property Type:</span>
            <span>House, Apartment</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Parkings:</span>
            <span>2</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Furnishing:</span>
            <span>Semifurnished</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
