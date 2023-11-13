import React from 'react';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import ActionButton from "/components/ui-components/ActionButton";
import Section from '../ui-components/Section';

const ChartContainer = ({ data1, data2, options }) => {
  const [interval, setInterval] = useState('week');
  const [activeButton, setActiveButton] = useState(interval.toLowerCase());

  const handleIntervalChange = (selectedInterval) => {
    setInterval(selectedInterval);
    setActiveButton(selectedInterval.toLowerCase());
  };

  return (
    <div style={{ width: '100%', marginLeft: 'auto', display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ textAlign: 'center' }}>Users Chart</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Line data={data1} options={options} />
        <Line data={data2} options={options} />
      </div>
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

export default ChartContainer;
