import React from 'react';

const WireframeServices = () => {
  return (
    <div className="py-10 px-5 md:px-20 lg:px-32">
      {/* Section 1: Quote */}
      <div
        className="relative bg-black text-white rounded-md p-10 mb-10 flex items-center justify-center"
        style={{ 
          backgroundImage: `url('/public/Images/D1.png')`, 
          backgroundPosition: 'left', 
          backgroundRepeat: 'no-repeat',
          minHeight: '300px' 
        }}
      >
        <div className="max-w-2xl text-center relative z-10">
          <div className="text-5xl text-yellow-400 mb-4">“</div>
          <p className="text-xl leading-relaxed">
            The job market of the future will consist of those jobs that robots cannot perform. Our blue-collar work is pattern recognition, making sense of what you see. Gardeners will still have jobs because every garden is different.
          </p>
        </div> 
      </div>
    
      {/* Section 2: Wireframe Services */}
      <div className="text-left mb-10">
        <h2 className="text-3xl font-bold mb-4">Make real time a wireframes services</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.
        </p>
        <ol className="list-decimal list-inside text-gray-600 space-y-2">
          <li>It brings the right people together with all the right information and tools to get work done</li>
          <li>We provide operational efficiency, data security, and flexible scale</li>
          <li>Your best work, together in one package that works seamlessly from your computer</li>
          <li>Delivers the tools you need to save time. Improve field performance always</li>
        </ol>
      </div>

      {/* Section 3: Profile Card */}
      <div
        className="relative bg-black text-white rounded-md p-6 flex items-center"
        style={{ backgroundImage: `url('/path-to-your-image/profile-pattern.png')`, backgroundSize: 'cover', backgroundPosition: 'right' }}
      >
        <div className="w-1/3">
          <img src="/path-to-your-image/profile-picture.png" alt="" className="rounded-full border-4 border-white w-32 h-32 object-cover mx-auto" />
        </div>
        <div className="w-2/3 text-left pl-6 relative z-10">
          <h3 className="text-2xl font-bold mb-2">Nayra Melson</h3>
          <p className="text-yellow-400 mb-2">Senior Manager</p>
          <p className="text-gray-400 leading-relaxed mb-4">
            Leads the global expansion of the designerz brand and oversees investment in solutions and innovation. Renowned coder and an authority on matters of industrial experience & interface.
          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WireframeServices;
