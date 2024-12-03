import React from 'react';


const BusinessConsultant = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-6">
    {/* Hero Section */}
    <div className="flex flex-col lg:flex-row bg-black text-white rounded-lg shadow-lg w-full max-w-7xl h-[500px]">
      <div className="flex flex-col justify-center p-12 lg:w-1/2 space-y-4 text-center lg:text-left">
        <span className="text-yellow-400 uppercase text-sm tracking-wider">Hello! I am</span>
        <h1 className="text-4xl font-bold">Adam Buschemia</h1>
        <p className="text-lg">Business Consultant</p>
        <p className="text-gray-400">
          Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.
        </p>
        <button className="bg-green-500 text-white py-2 px-6 mt-4 rounded-md hover:bg-green-600 transition duration-300">
          Book a Meeting
        </button>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center p-4">
        <img src='/public/Images/h1.png' alt="Consultant" className="rounded-lg shadow-lg max-w-full h-full" />
      </div>
    </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mt-8 space-y-6 lg:space-y-0 w-full max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md text-center lg:text-left flex-1 lg:mr-4">
          <h2 className="text-xl font-semibold mb-2">Finance & Restructuring</h2>
          <p className="text-sm text-gray-600 mb-4">
            Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.
          </p>
          <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition duration-300">
            Our Services
          </button>
        </div>

        <div className="bg-yellow-200 p-6 rounded-lg shadow-md text-center lg:text-left flex-1 lg:mx-4">
          <h2 className="text-xl font-semibold mb-2">Our Approach</h2>
          <p className="text-sm text-gray-700 mb-4">
            Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.
          </p>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">
            More About
          </button>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center lg:text-left flex-1 lg:ml-4">
          <h2 className="text-xl font-semibold text-white mb-2">Consultalk Result</h2>
          <p className="text-sm text-gray-400 mb-4">
            Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
            Explore Our Solution
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessConsultant;
