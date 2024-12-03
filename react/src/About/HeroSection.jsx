import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai'; // Import the phone icon

const HeroSection = () => {
  return (
    <section className="bg-black text-white relative py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-6 md:w-1/2">
          <button className="bg-green-500 text-white py-2 px-6 rounded-full uppercase tracking-wider">Book Now</button>
          <h1 className="text-4xl md:text-5xl font-bold">
            Better Consult, <span className="text-gray-400">Better Results</span>
          </h1>
          <p className="text-lg">
            Our software development agency has a growth of up to 30% per each year. If you are result-oriented, not afraid to take initiative – drop us a note and join our team!
          </p>
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-500 text-black rounded-full p-3 flex items-center justify-center">
              
              <AiOutlinePhone className="h-6 w-6" />
            </div>
            <div className="bg-yellow-500 text-black rounded-full py-2 px-4">
              <p className="text-xl font-semibold">+800 1234 654</p>
            </div>
          </div>
        </div>
        <div className="relative mt-12 md:mt-0 md:w-1/2">
          <div className="relative z-10">
            <img src="/public/Images/img.png" alt="Hero" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
