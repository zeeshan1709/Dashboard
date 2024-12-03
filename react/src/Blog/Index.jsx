import React from 'react';

const articles = [
  {
    id: 1,
    title: 'Consulting Fees Study 2019 (And How To Raise Your Rates)',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
    author: 'John Carter',
    date: 'September 1, 2022',
    image: '/public/Images/R1.png', 
    avatar: '/public/Images/B2.png', 
  },
  {
    id: 2,
    title: 'What is growth hacking and how to apply it to your startup',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
    author: 'Nayra Melson',
    date: 'September 1, 2022',
    image: '/public/Images/R2.png', 
    avatar: '/public/Images/B1.png', 
  },
  {
    id: 3,
    title: 'Five Steps to Implement Motivation in Management',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
    author: 'John Carter',
    date: 'September 1, 2022',
    image: '/public/Images/R3.png', 
    avatar: '/public/Images/B1.png', 
  },
  {
    id: 4,
    title: 'Team Identifiers, Benefits, and How to Build One that Works',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
    author: 'Nayra Melson',
    date: 'September 1, 2022',
    image: '/public/Images/R4.png', 
    avatar: '/public/Images/B2.png',
  },
  {
    id: 5,
    title: 'Professional Development Goals: Steps and Examples',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
    author: 'John Carter',
    date: 'September 1, 2022',
    image: '/public/Images/R5.png',
    avatar: '/public/Images/B1.png', 
  },
  {
    id: 6,
    title: 'A Guide on What to Bring on the First Day of Work',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
    author: 'Nayra Melson',
    date: 'September 1, 2022',
    image: '/public/Images/R6.png', 
    avatar: '/public/Images/B2.png', 
  },
];

const ArticleCard = ({ article }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    {/* Image */}
    <img src={article.image} alt={article.title} className="w-full h-52 object-cover" />
    
    {/* Content */}
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{article.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{article.description}</p>
      
      {/* Author and Date Section with Read More Button */}
      <div className="flex items-center justify-between">
        {/* Avatar and Author Info */}
        <div className="flex items-center text-gray-500 text-sm">
          <img src={article.avatar} alt={article.author} className="w-8 h-8 rounded-full mr-2" />
          <div>
            <span>{article.author}</span>
            <span className="block">{article.date}</span>
          </div>
        </div>
        
        {/* Read More Button */}
        <button className="bg-black text-white text-sm font-medium py-2 px-4 rounded-full">
          Read More
        </button>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="relative mx-auto px-4 py-16 max-w-4xl"> {/* Decreased max width */}
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block bg-green-100 text-green-800 text-xs uppercase tracking-wide font-semibold px-3 py-1 rounded-full">
          Blog
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mt-4">
          Take a look at our latest articles & resources
        </h1>
      </div>

      {/* More News Button - Positioned at the Top Right */}
      <div className="absolute top-16 right-4">
        <button className="bg-yellow-400 text-black text-sm font-semibold px-8 py-3 rounded-full hover:bg-yellow-500 transition">
          More News
        </button>
      </div>

      {/* Articles Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default App;
