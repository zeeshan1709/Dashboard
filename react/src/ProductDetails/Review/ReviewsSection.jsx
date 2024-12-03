import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Abhijeet Das',
      date: 'June 12, 2024',
      rating: 5,
      comment: 'It\'s really easy to use and is exactly what I am looking for. A lot of good looking templates & it\'s highly customizable. Live support is helpful, solved my issue in no time.',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      name: 'Shivani Desai',
      date: 'June 11, 2024',
      rating: 5,
      comment: 'It\'s really easy to use and is exactly what I am looking for. A lot of good looking templates & it\'s highly customizable. Live support is helpful, solved my issue in no time.',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      name: 'Chetan Oswal',
      date: 'June 11, 2024',
      rating: 5,
      comment: 'It\'s really easy to use and is exactly what I am looking for. A lot of good looking templates & it\'s highly customizable. Live support is helpful, solved my issue in no time.',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      name: 'Bhavika Agarwal',
      date: 'June 10, 2024',
      rating: 5,
      comment: 'It\'s really easy to use and is exactly what I am looking for. A lot of good looking templates & it\'s highly customizable. Live support is helpful, solved my issue in no time.',
      avatar: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="w-9/12 -mt-20 mr-12 bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Guest Reviews</h3>
        <button className="text-red-500 border border-red-500 rounded-full px-4 py-1 hover:bg-red-50">
          View All Reviews
        </button>
      </div>
      {reviews.map((review, index) => (
        <ReviewItem key={index} {...review} />
      ))}
          <div className="w-full bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Leave A Comment</h3>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Your name"
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="email"
            placeholder="Your email"
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Save your name, email for the next time review</span>
          </label>
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Review"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            rows="4"
          ></textarea>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Post Comment
        </button>
      </form>
    </div>
    </div>
  );
};

export default ReviewsSection;
