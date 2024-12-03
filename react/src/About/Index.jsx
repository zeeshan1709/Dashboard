import React from 'react';

const VisionSection = () => {
  return (
    <div className="relative bg-white py-16 px-4">
      
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row items-center justify-between lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          
          <div className="lg:w-1/2 space-y-4 text-left">
            <span className="text-green-600 text-lg font-semibold">OUR VISION</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Turn your ideas into reality.
            </h2>
            <p className="text-gray-500 text-lg mt-4">
              Capitalize on low hanging fruit to identify a ballpark value-added activity to test. Override the digital divide with additional clickthroughs from DevOps.
            </p>
            <div className="space-y-4 text-left">
              <p className="flex items-center text-gray-700 text-lg">
                <span className="text-green-600 text-2xl mr-2">✔</span> Bring to the table win-win survival strategies to ensure proactive domination.
              </p>
              <p className="flex items-center text-gray-700 text-lg">
                <span className="text-green-600 text-2xl mr-2">✔</span> At the end of the day.
              </p>
              <p className="flex items-center text-gray-700 text-lg">
                <span className="text-green-600 text-2xl mr-2">✔</span> Capitalize on low hanging fruit to identify a ballpark value-added activity to test.
              </p>
            </div>
          </div>

          
          <div className="lg:w-1/2 flex justify-end">
            <img className="rounded-lg shadow-lg max-w-full h-auto" src="public/Images/photo.png" alt="Team working" />
          </div>
        </div>

        
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-gray-900">1128+</p>
            <p className="mt-2 text-gray-500">Successful Work</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">908+</p>
            <p className="mt-2 text-gray-500">Team Members</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">258+</p>
            <p className="mt-2 text-gray-500">Happy Customers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">564+</p>
            <p className="mt-2 text-gray-500">Creative Ideas</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default VisionSection;

