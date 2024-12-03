import React from 'react';

const MapSection = () => {
  return (
    <div className="w-9/12 h-full -mt-20 mr-12 bg-white shadow-md rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold mb-4">Map</h3>
      <div className="w-full h-64 rounded-lg overflow-hidden">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d121059.04711120861!2d73.7805655!3d18.5245986!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1722579613853!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
