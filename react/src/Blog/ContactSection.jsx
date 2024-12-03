import React from "react";

const ContactSection = () => {
  return (
    <div className="relative bg-black text-white p-8 rounded-lg max-w-6xl mx-auto flex items-center justify-between space-y-4 space-x-4">
      {/* Left Section: Text */}
      <div className="flex flex-col space-y-4">
        <div className="uppercase text-sm font-semibold text-gray-400">
          Contact
        </div>
        <h2 className="text-4xl font-bold">Ready To Talk?</h2>
        <p className="text-gray-300">
          Please sollicitudin aliquam ultrices sagittis orci a scelerisque. 
          Massa placerat duis ultricies lacus sed turpis.
        </p>
        <p className="text-gray-300">
          Pellentesque pellentesque habitant morbi tristique.
        </p>

        <div className="flex items-center space-x-2">
          <input
            type="email"
            placeholder="your email address"
            className="p-2 rounded-lg text-black w-64"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg">
            Send Message
          </button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="hidden md:block relative">
        <img
          src="/public/Images/F1.png" 
          alt="Hands together"
          className="h-full w-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContactSection;
