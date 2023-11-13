import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

const MixedChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales (Line Chart)',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.5,
      },
      {
        label: 'Sales (Bar Chart)',
        data: [10, 15, 8, 12, 6, 9],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <div style={{ width: '500px', height: '300px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>Mixed Chart Example</h2>
      <Line data={data} options={options} />
      <Bar data={data} options={options} />
    </div>
  );
};

export default MixedChart;
