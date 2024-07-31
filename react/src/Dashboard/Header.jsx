import React from 'react';

const Header = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden" 
      style={{ backgroundImage: "url('https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Thar/10745/1697697308167/front-left-side-47.jpg?tr=w-880,h-495')" }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center p-4 md:p-8 lg:p-12">
        <div>
          <h1 className="text-white text-lg md:text-2xl lg:text-4xl font-bold">We updated our cancellation policy to ensure the user experience</h1>
          <p className="text-white mt-2 md:mt-4 lg:mt-6 text-sm md:text-lg lg:text-xl">Learn more details on our latest blog post</p>
          <button className="mt-4 bg-violet-700 text-white py-2 px-4 md:py-3 md:px-6 rounded">Explore Updates</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
