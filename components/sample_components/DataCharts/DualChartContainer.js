import React from 'react';

const DualChartContainer = ({ chart1, chart2, heading }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '20px 0' }}>
      {heading && <h2 style={{ textAlign: 'left', margin: '30px' }}>{heading}</h2>}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* Render the first chart */}
        <div style={{ flex: 1, maxWidth: '50%', margin: '10px' }}>
          {chart1}
        </div>
        {/* Render the second chart */}
        <div style={{ flex: 1, maxWidth: '50%', margin: '10px' }}>
          {chart2}
        </div>
      </div>
    </div>
  );
};

export default DualChartContainer;
