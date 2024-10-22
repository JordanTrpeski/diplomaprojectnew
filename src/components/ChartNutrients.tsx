import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartNutrients: React.FC = () => {
  const [Protein, setProtein] = useState(false);
  const [Carbohydrates, setCarbohydrates] = useState(false);
  const [Fats, setFats] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState('Last 7 days');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (value === 'Protein') setProtein(checked);
    if (value === 'Carbohydrates') setCarbohydrates(checked);
    if (value === 'Fats') setFats(checked);
  };

  const handleTimeRangeClick = (range: string) => {
    setSelectedTimeRange(range);
    setDropdownOpen(false);
  };

  // Donut chart data
  const data = {
    labels: ['Protein', 'Carbohydrates', 'Fats'],
    datasets: [
      {
        label: 'Nutritients',
        data: [300, 50, 100], // Replace with real data
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
        hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
      },
    ],
  };

  // Chart options
  const options: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  // Register a custom plugin to draw text in the center
  ChartJS.register({
    id: 'customCenterText',
    beforeDraw: (chart) => {
      const { ctx, chartArea } = chart;
      if (!chartArea) return;

      const { width, height } = chartArea;
      const fontSize = 20; // Set font size
      ctx.restore();
      ctx.font = `${fontSize}px sans-serif`;
      ctx.fillStyle = '#000'; // Set text color
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('kcal', width / 2, height / 2); // Replace 'Sample Text' with desired text
      ctx.save();
    },
  });

  return (
    <div className=" bg-white rounded-lg shadow p-4 md:p-6 justify-center items-center">
      <div className="flex justify-between mb-3">
        <div className="flex items-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 pe-1">Nutritients Chart</h5>
        </div>
      </div>

      <div>
        <div className="flex" id="devices">
          <div className="flex items-center me-4">
            <input
              id="protein"
              type="checkbox"
              value="protein"
              checked={Protein}
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
            />
            <label htmlFor="protein" className="ms-2 text-sm font-medium text-gray-900">
              Protein
            </label>
          </div>
          <div className="flex items-center me-4">
            <input
              id="carbohydrates"
              type="checkbox"
              value="carbohydrates"
              checked={Carbohydrates}
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
            />
            <label htmlFor="carbohydrates" className="ms-2 text-sm font-medium text-gray-900">
              Carbohydrates
            </label>
          </div>
          <div className="flex items-center me-4">
            <input
              id="fats"
              type="checkbox"
              value="fats"
              checked={Fats}
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
            />
            <label htmlFor="fats" className="ms-2 text-sm font-medium text-gray-900 ">
              Fats
            </label>
          </div>
        </div>
      </div>

      {/* Donut Chart */}
      <div className="py-6" id="donut-chart">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartNutrients;
