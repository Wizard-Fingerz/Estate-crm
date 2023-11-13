import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import ActionButton from "/components/ui-components/ActionButton";
import Section from '../ui-components/Section';
import { Chart, LineElement, BarController, CategoryScale, PointElement, LinearScale, registerables } from 'chart.js';

Chart.register(LineElement, BarController, CategoryScale, LinearScale, PointElement);
Chart.register(...registerables)


const UserLineChart = () => {
  const [interval, setInterval] = useState('week');
  const [activeButton, setActiveButton] = useState(interval.toLowerCase());

  // Data for different intervals (week, month, year)
  const dataByInterval = {
    week: {
      labels: ['May 1', 'May 2', 'May 3', 'May 4', 'May 5', 'May 6', 'May 7'],
      datasets: [
        {
          data: [2, 1, 3, 5.6, 10, 6.7, 7.4],
          backgroundColor: 'transparent',
          borderColor: '#8a2be2', // Change the line color to purple (Hex code for purple)
          pointBorderColor: 'transparent',
          pointBorderWidth: 4,
          tension: 0.5,
        },
      ],
    },
    month: {
      labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
      datasets: [
        {
          data: [2, 5.6, 7, 8, 12, 15, 11],
          backgroundColor: 'transparent',
          borderColor: '#8a2be2', // Change the line color to purple (Hex code for purple)
          pointBorderColor: 'transparent',
          pointBorderWidth: 4,
          tension: 0.5,
        },
      ],
    },
    year: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          data: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
          backgroundColor: 'transparent',
          borderColor: '#8a2be2', // Change the line color to purple (Hex code for purple)
          pointBorderColor: 'transparent',
          pointBorderWidth: 4,
          tension: 0.5,
        },
      ],
    },
  };

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          stepSize: 5,
          callback: (value) => value + 'K',
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  const handleIntervalChange = (selectedInterval) => {
    setInterval(selectedInterval);
    setActiveButton(selectedInterval.toLowerCase());
  };

  return (
    <div style={{ width: '600px', height: '400px', marginLeft: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>Active Users Account</h2>
      <Line data={dataByInterval[interval]} options={options} />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <Section>
          <ActionButton
            label="Week"
            isActive={activeButton === "week"}
            inverse={true}
            onClick={() => handleIntervalChange('week')}
          />
          <ActionButton
            label="Month"
            isActive={activeButton === "month"}
            inverse={true}
            onClick={() => handleIntervalChange('month')}
            style={{ margin: 'auto' }}
          />
          <ActionButton
            label="Year"
            isActive={activeButton === "year"}
            inverse={true}
            onClick={() => handleIntervalChange('year')}
          />
        </Section>
      </div>
    </div>
  );
};

export default UserLineChart;
