import React from 'react';
import { FaTachometerAlt, FaCar, FaChartLine, FaHeadset, FaToolbox, FaCog, FaShoppingCart } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-full">
      <div className="p-4">
        <div className="mb-6">
          <div className="flex items-center p-2 bg-indigo-100 rounded-lg">
            <FaTachometerAlt className="text-indigo-500 mr-3" />
            <span className="text-indigo-500">Dashboard</span>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaCar className="mr-3" />
            <span>Car Inventory</span>
          </div>
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaChartLine className="mr-3" />
            <span>Sales Data</span>
          </div>
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaHeadset className="mr-3" />
            <span>Customer Inquiries</span>
          </div>
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaToolbox className="mr-3" />
            <span>Service Requests</span>
          </div>
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaCog className="mr-3" />
            <span>Settings</span>
          </div>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg text-center">
          <div className="flex justify-center mb-3">
            <FaShoppingCart className="text-2xl" />
          </div>
          <p className="mb-3">A new way to buy modern and sell old cars</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Sell your Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
