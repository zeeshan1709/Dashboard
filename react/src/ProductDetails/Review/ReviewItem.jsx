import React from 'react';

const ReviewItem = ({ name, date, rating, comment, avatar }) => {
  return (
    <div className="flex items-start space-x-4 py-4 border-b border-gray-200">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div className="flex-grow">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">{name}</h4>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <div className="flex items-center mb-2">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 text-yellow-400" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.63.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
          ))}
        </div>
        <p className="text-gray-700">{comment}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
