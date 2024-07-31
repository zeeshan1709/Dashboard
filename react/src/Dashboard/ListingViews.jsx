import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  datasets: [
    {
      label: 'Views',
      data: [300000, 280000, 350000, 320000, 400000, 370000],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      display: true,
    },
    y: {
      display: true,
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return `₹ ${value / 1000}k`;
        },
      },
    },
  },
};

const ListingViews = () => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="flex-grow bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">Your Listing Views</h2>
            <div>
              <button className="bg-violet-700 text-white py-1 px-3 rounded mr-1">Day</button>
              <button className="bg-violet-700 text-white py-1 px-3 rounded mr-1">Week</button>
              <button className="bg-violet-700 text-white py-1 px-3 rounded">Month</button>
            </div>
          </div>
          <Line data={data} options={options} />
        </div>
        <div className="lg:w-1/3 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-2">Sales Volume</h2>
          <ul>
            <li className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0X9aljqGYt0axhblMN5ZuzajSWVJNdwe0zQ&s" alt="Tata" className="w-6 h-6 mr-2" />
                Tata
              </span>
              <span className="flex items-center">
                32.4k
                <span className="text-green-500 ml-2">12.8%</span>
              </span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <img src="https://logowik.com/content/uploads/images/197_suzuki.jpg" alt="Suzuki" className="w-6 h-6 mr-2" />
                Suzuki
              </span>
              <span className="flex items-center">
                26.2k
                <span className="text-red-500 ml-2">14.4%</span>
              </span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <img src="https://cdn.worldvectorlogo.com/logos/hyundai-motor-company-2.svg" alt="Hyundai" className="w-6 h-6 mr-2" />
                Hyundai
              </span>
              <span className="flex items-center">
                23.1k
                <span className="text-green-500 ml-2">13.2%</span>
              </span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <img src="https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_001.jpg" alt="Toyota" className="w-6 h-6 mr-2" />
                Toyota
              </span>
              <span className="flex items-center">
                30.2k
                <span className="text-green-500 ml-2">18.4%</span>
              </span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <img src="https://logowik.com/content/uploads/images/honda5836.logowik.com.webp" alt="Honda" className="w-6 h-6 mr-2" />
                Honda
              </span>
              <span className="flex items-center">
                29.5k
                <span className="text-red-500 ml-2">21.3%</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListingViews;
