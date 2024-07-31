import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Sales = () => {
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Sales',
        data: [100000, 50000, 200000, 158000, 200000, 50000, 200000],
        backgroundColor: '#4A90E2', 
        borderColor: '#4A90E2',
        borderWidth: 1,
        barThickness: 10, // Adjust this value to reduce the bar size
      },
      {
        label: 'Target',
        data: [300000, 200000, 300000, 300000, 300000, 300000, 300000],
        backgroundColor: '#E0E0E0', 
        borderColor: '#E0E0E0',
        borderWidth: 1,
        barThickness: 10, // Adjust this value to reduce the bar size
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += `₹${context.raw.toLocaleString()}`;
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `₹${value / 1000}k`;
          },
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-200 p-4 md:p-8">
      <div className="bg-white p-4 md:p-8 rounded-md shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-xl font-semibold mb-4 md:mb-0">Sales</h2>
          <button className="px-4 py-2 bg-purple-700 text-white rounded">View All</button>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-2/3 pr-0 lg:pr-4">
            {[
              { name: 'Nexon', sales: '32.4k', change: '12.8%', image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80' },
              { name: 'Creta', sales: '21.1k', change: '12.8%', image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg?q=80' },
              { name: 'Baleno', sales: '26.2k', change: '12.8%', image: 'https://images.hindustantimes.com/auto/img/2022/02/22/1600x900/2022_Maruti_Suzuki_Baleno_1645500477215_1645500490317.png' },
              { name: 'Venue', sales: '30.1k', change: '12.8%', image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20190521051421_Hyundai-Venue-front-3.jpg&w=736&h=488&q=75&c=1' },
            ].map((car, idx) => (
              <div key={idx} className="bg-white p-4 rounded-md shadow text-center">
                <img src={car.image} alt={car.name} className="w-full h-24 object-contain mb-4" />
                <h3 className="text-lg font-medium">{car.name}</h3>
                <p className="text-gray-500">{car.sales}</p>
                <p className="text-green-500">{car.change}</p>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/3 bg-white p-4 rounded-md shadow mt-4 lg:mt-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Sales</h2>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Day</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded">Week</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Month</button>
              </div>
            </div>
            <div className="h-72">
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
