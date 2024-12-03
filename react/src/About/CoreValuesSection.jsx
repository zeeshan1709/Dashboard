import React from 'react';

const CoreValuesSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
       
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <div>
            <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Growing with our clients</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Our core values & principles</h2>
            <p className="text-gray-500 text-lg mt-4">
              Capitalize on low hanging fruit to identify a ballpark value added activity beta test. 
              Override the digital divide with additional from DevOps.
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            <a
              href="#"
              className="inline-block bg-black text-white font-medium text-lg py-3 px-8 rounded-md hover:bg-gray-900"
            >
              Get in touch
            </a>
          </div>
        </div>

       
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         
          <div className="bg-white p-8 rounded-lg shadow-md md:row-span-2 flex flex-col justify-between">
            <div>
              <div className="text-black mb-4">
                <div className="text-3xl inline-block bg-gray-200 p-4 rounded-full">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 4H7a2 2 0 01-2-2V8a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Creative Ideas</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.</p>
            </div>
            <a href="#" className="text-black hover:text-yellow-600 mt-4 block font-medium">
              Read More &rarr;
            </a>
          </div>

         
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <div className="text-black mb-4">
                <div className="text-3xl inline-block bg-gray-200 p-4 rounded-full">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a2 2 0 012-2h14a2 2 0 012 2v16l-7-3-7 3V4z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best Features</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.</p>
            </div>
            <a href="#" className="text-black hover:text-yellow-600 mt-4 block font-medium">
              Read More &rarr;
            </a>
          </div>

          
          <div className="bg-white p-8 rounded-lg shadow-md md:row-span-2 flex flex-col justify-between">
            <div>
              <div className="text-black mb-4">
                <div className="text-3xl inline-block bg-gray-200 p-4 rounded-full">
                  {/* Add icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 9a4.5 4.5 0 108.25 2.92V12a2 2 0 01-2-2v-.5a2 2 0 00-2-2h-2A2.5 2.5 0 009 10v3h1.75v-.5h2.5v.5H12v2.5h1.25" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Experience</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.</p>
            </div>
            <a href="#" className="text-black hover:text-yellow-600 mt-4 block font-medium">
              Read More &rarr;
            </a>
          </div>

          
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <div className="text-black mb-4">
                <div className="text-3xl inline-block bg-gray-200 p-4 rounded-full">
                
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14.5a3.5 3.5 0 013.5 3.5v4H8v-4a3.5 3.5 0 013.5-3.5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5a2.5 2.5 0 11-5 0V6a2.5 2.5 0 015 0v-.5" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Solutions</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.</p>
            </div>
            <a href="#" className="text-black hover:text-yellow-600 mt-4 block font-medium">
              Read More &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesSection;
