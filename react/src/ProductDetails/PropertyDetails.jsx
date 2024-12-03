import React from 'react';

const PropertyCard = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-6 rounded-lg shadow-lg">
      <div className="flex-1 max-w-2xl h-96 relative bg-white p-6 rounded-lg shadow-md md:ml-60">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Paranjape Blue Ridge</h2>
          <span className="text-red-500 text-xl font-bold">₹32,000</span>
        </div>
        <p className="text-gray-500 mb-4">Wanwadi, Pune, Maharashtra</p>
        <div className="flex flex-wrap mb-4">
          <div className="flex items-center mr-4">
            <span className="material-icons text-red-500">hotel</span>
            <span className="ml-2">2 Bedrooms</span>
          </div>
          <div className="flex items-center mr-4">
            <span className="material-icons text-red-500">bathtub</span>
            <span className="ml-2">2 Bathrooms</span>
          </div>
          <div className="flex items-center mr-4">
            <span className="material-icons text-red-500">directions_car</span>
            <span className="ml-2">2 Parkings</span>
          </div>
          <div className="flex items-center mr-4">
            <span className="material-icons text-red-500">elevator</span>
            <span className="ml-2">2 Lifts</span>
          </div>
          <div className="flex items-center mr-4">
            <span className="material-icons text-red-500">pets</span>
            <span className="ml-2">Pet Friendly</span>
          </div>
          <div className="flex items-center mr-4">
            <span className="material-icons text-red-500">square_foot</span>
            <span className="ml-2">1300 SqFt</span>
          </div>
          <div className="flex items-center">
            <span className="material-icons text-red-500">balcony</span>
            <span className="ml-2">2 Balconies</span>
          </div>
        </div>
        <p className="text-gray-700">3 BHK FLAT IS AVAILABLE FOR RENT WITH A MODULAR KITCHEN ON AN IMMEDIATE BASIS. FOR MORE DISCUSSION AND VISIT KINDLY CALL US OR VISIT SHOP NO 211, SECOND FLOOR, R6 COMMERCIAL, KOLTE...</p>
      </div>
      <div className="flex-1 max-w-80 bg-white p-6 rounded-xl shadow-md mt-6 md:mt-0 md:ml-6 md:mr-32">
        <div className="flex items-center mb-4">
          <img src="" alt="Anil Pore" className="w-16 h-16 rounded-full mr-4"/>
          <div>
            <h3 className="text-xl font-bold">Zeeshan Shaikh</h3>
            <p className="text-gray-500">+91 9075326686</p>
            <p className="text-gray-500">Zeeshanshhaikh@gmail.com</p>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name:</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-lg"/>
          </div>
          <div>
            <label className="block text-gray-700">Phone Number:</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-lg"/>
          </div>
          <div>
            <label className="block text-gray-700">Email Address:</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-lg"/>
          </div>
          <div>
            <label className="block text-gray-700">Your Message:</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-lg"></textarea>
          </div>
          <button className="w-full bg-red-500 text-white p-2 rounded-lg">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default PropertyCard;
