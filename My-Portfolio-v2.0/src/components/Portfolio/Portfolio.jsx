// src/components/Portfolio.jsx
import React from 'react';

const Portfolio = () => {
  // Example array of portfolio items
  const portfolioItems = [
    {
      title: 'Unity Biz',
      description: 'A brief description of Project One...',
      imageUrl: './assets/unitybiz.png',
      link: 'https://unitybiz-fd2efb602da8.herokuapp.com/'
    },
    {
      title: 'Fandora',
      description: 'A brief description of Project Two...',
      imageUrl: '/path-to-image-2.jpg',
      link: 'https://keybit-1.github.io/Fandora/'
    },
    {
      title: 'Note Taker App',
      description: 'A brief description of Project Three...',
      imageUrl: '/path-to-image-3.jpg',
      link: 'https://ths-note-app-216bf97f5052.herokuapp.com/'
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-12">My Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioItems.map((item, index) => (
          <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
            <img src={item.imageUrl} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="mb-4">{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;


