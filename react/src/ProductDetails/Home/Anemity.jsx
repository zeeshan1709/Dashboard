import React from "react";

const Amenities = () => {
  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Amenities and Features</h2>
      <ul className="mt-2 grid grid-cols-2 gap-2">
        <li>🌧️ Rain Water Harvesting</li>
        <li>🎮 Indoor Games Room</li>
        <li>🔥 Barbeque Pit</li>
        <li>🌳 Park</li>
        <li>🎾 Outdoor Tennis Court</li>
        <li>🅿️ Visitors Parking</li>
        <li>🌐 Internet/Wifi Connectivity</li>
        <li>🎬 Mini Cinema Theatre</li>
        <li>🏊 Infinity Pool</li>
      </ul>
    </div>
  );
};

export default Amenities;
