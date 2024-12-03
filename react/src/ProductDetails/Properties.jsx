import React from 'react';

const properties = [
  {
    id: 1,
    name: "Paranjape Blue Ridge",
    location: "Waramwadi, Pune, Maharashtra",
    price: "₹ 30000 per month",
    beds: 2,
    baths: 3,
    size: "4",
    available: "1 Days ago",
    imgSrc: "https://5.imimg.com/data5/SELLER/Default/2021/11/JR/GP/OE/54464302/simple-bedroom-interior-designing-500x500.jpeg",
    owner: "Anil Pore"
  },
  {
    id: 2,
    name: "Kolte-Patil 24k Glamore",
    location: "No 543, MBN Road, Pune, Maharashtra",
    price: "₹ 32000 per month",
    beds: 2,
    baths: 3,
    size: "4",
    available: "2 Days ago",
    imgSrc: "https://i.pinimg.com/736x/88/20/15/8820151ed800bc1f19c63dc7557c70dc.jpg",
    owner: "Vishwas Dubey"
  },
  {
    id: 3,
    name: "The Willows of Plainview",
    location: "Pushpanagari Apartment, Kothrud",
    price: "₹ 30000 per month",
    beds: 2,
    baths: 3,
    size: "4",
    available: "2 Days ago",
    imgSrc: "https://i.pinimg.com/736x/fc/a6/fa/fca6faf52aae0294a52927658eb43879.jpg",
    owner: "Swati Sharma"
  }
];

const Properties = () => {
  return (
    <div className="p-6  ">
      <h2 className="text-2xl font-bold mb-4">Previously Used Properties</h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map(property => (
          <div key={property.id} className="border rounded-lg p-4">
            <img src={property.imgSrc} alt={property.name} className="w-full h-48 object-cover mb-4 rounded" />
            <div className="text-red-500 text-lg font-semibold mb-2">{property.price}</div>
            <h3 className="text-xl font-bold mb-1">{property.name}</h3>
            <div className="text-gray-600 mb-2">{property.location}</div>
            <div className="text-gray-500 text-sm flex items-center mb-4">
              <span className="mr-2">{property.beds} 🛏️</span>
              <span className="mr-2">{property.baths} 🛁</span>
              <span>{property.size} 📐</span>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span className="mr-2">{property.available}</span>
              <span>👤 {property.owner}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
