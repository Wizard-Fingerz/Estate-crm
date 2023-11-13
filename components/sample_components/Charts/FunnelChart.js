import React from 'react';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, DoughnutController, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register necessary chart components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, DoughnutController, Legend, Tooltip);

const initialData = {
  labels: ['Visits', 'Sign-ups', 'Subscriptions', 'Purchases'],
  datasets: [
    {
      data: [1000, 800, 600, 400],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const FunnelChart = () => {
  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    responsive: true,
    cutout: '70%',
    layout: {
      padding: {
        top: 30,
        bottom: 30,
      },
    },
  };

  return (
    <div style={{ width: '600px', height: '400px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>Funnel Chart</h2>
      <Doughnut data={initialData} options={options} />
    </div>
  );
};

export default FunnelChart;
