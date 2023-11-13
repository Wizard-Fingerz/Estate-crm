import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarChart = () => {
  const data = {
    labels: ['Math', 'Science', 'History', 'English', 'Art', 'Music'],
    datasets: [
      {
        label: 'Student A',
        data: [80, 65, 90, 75, 60, 70], // Replace this with your data for Student A
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
      },
      {
        label: 'Student B',
        data: [70, 85, 70, 80, 90, 75], // Replace this with your data for Student B
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
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
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 20,
        max: 100,
      },
    },
  };

  return (
    <div style={{ width: '500px', height: '300px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>Radar Chart Example</h2>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
