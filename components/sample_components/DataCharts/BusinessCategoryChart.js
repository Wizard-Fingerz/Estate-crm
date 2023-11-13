import React, { useState } from 'react';
import { PolarArea } from 'react-chartjs-2';
import ActionButton from "/components/ui-components/ActionButton";
import Section from '../ui-components/Section';

const BusinessCategoryChart = () => {
  const [interval, setInterval] = useState('week');
  const [activeButton, setActiveButton] = useState(interval.toLowerCase());

  // Data for different intervals (week, month, year)
  const dataByInterval = {
    week: {
      labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
      datasets: [
        {
          data: [30, 50, 20, 40, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    month: {
      // Data for the month interval
      labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
      datasets: [
        {
          data: [30, 60, 60, 40, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    year: {
      // Data for the year interval
      labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
      datasets: [
        {
          data: [30, 70, 10, 90, 30],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  const handleIntervalChange = (selectedInterval) => {
    setInterval(selectedInterval);
    setActiveButton(selectedInterval.toLowerCase());
  };

  return (
    <div style={{ width: '350px', height: '400px', margin: 'auto', marginTop: '-30px', zIndex: 1}}>
      <h2 style={{ textAlign: 'center' }}>Business Category Chart</h2>
      <PolarArea data={dataByInterval[interval]} options={options} />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <Section>
          <ActionButton
            label="Week"
            inverse={true}
            isActive={activeButton === "week"}
            onClick={() => handleIntervalChange('week')}
          />
          <ActionButton
            label="Month"
            inverse={true}
            onClick={() => handleIntervalChange('month')}
            isActive={activeButton === "month"}
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

export default BusinessCategoryChart;
