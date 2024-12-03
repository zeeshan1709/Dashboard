import React from 'react';

const NearbySection = () => {
  return (
    <div className="w-9/12 mt-2 mr-12 bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">What's Nearby</h3>
      <p className="text-gray-600 mb-4">
        Explore nearby amenities to precisely locate your property and identify surrounding conveniences, providing a comprehensive overview of the living environment and the property's convenience.
      </p>
      <div className="grid grid-cols-2 gap-y-2">
        <p className="text-gray-800"><strong>School:</strong> 0.7km</p>
        <p className="text-gray-800"><strong>Hospital:</strong> 0.4km</p>
        <p className="text-gray-800"><strong>University:</strong> 1.3km</p>
        <p className="text-gray-800"><strong>Metro Station:</strong> 1.8km</p>
        <p className="text-gray-800"><strong>Grocery Center:</strong> 0.6km</p>
        <p className="text-gray-800"><strong>Gym, Wellness:</strong> 1.3km</p>
        <p className="text-gray-800"><strong>Market:</strong> 1.1km</p>
      </div>
    </div>
  );
};

export default NearbySection;
