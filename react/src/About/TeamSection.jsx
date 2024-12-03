import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const TeamSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="text-center mb-12">
        <h2 className="text-yellow-500 text-sm uppercase tracking-wider font-semibold">Our Team</h2>
        <h1 className="text-3xl font-extrabold text-gray-900 mt-2">
          We champion the bold to achieve the extraordinary
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Ipsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, and respect for the team. We value the bold, creative, and innovative approach to achieving extraordinary results.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="text-center">
          <img
            src="/public/Images/1.png"
            alt="Sarah Jasmine"
            className="mx-auto rounded-lg"
            style={{ width: '250px', height: '250px' }}  
          />
          <div className="mt-4">
            <h3 className="mt-2 text-xl font-semibold text-gray-900">Sarah Jasmine</h3>
            <p className="mt-1 text-gray-600">Leverage agile frameworks to provide a robust synopsis for high-level overviews.</p>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="text-center">
          <img
            src="/public/Images/2.png"
            alt="John Carter"
            className="mx-auto rounded-lg"
            style={{ width: '250px', height: '250px' }} 
          />
          <div className="mt-4">
            <h3 className="mt-2 text-xl font-semibold text-gray-900">John Carter</h3>
            <p className="mt-1 text-gray-600">Leverage agile frameworks to provide a robust synopsis for high-level overviews.</p>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="text-center">
          <img
            src="/public/Images/3.png"
            alt="Daisy Stella"
            className="mx-auto rounded-lg"
            style={{ width: '250px', height: '250px' }} 
          />
          <div className="mt-4">
            <h3 className="mt-2 text-xl font-semibold text-gray-900">Daisy Stella</h3>
            <p className="mt-1 text-gray-600">Leverage agile frameworks to provide a robust synopsis for high-level overviews.</p>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
