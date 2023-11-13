import React, { useState } from 'react';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, DoughnutController, Legend, Tooltip, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ActionButton from "/components/ui-components/ActionButton";
import Section from '../ui-components/Section';

// Register necessary chart components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, DoughnutController, Legend, Tooltip);

Chart.register(...registerables)



const initialData = {
    labels: ['Product Views', 'Add to Cart', 'Checkouts', 'Purchases'],
    datasets: [
        {
            label: 'Electronics',
            weekly: [1500, 1200, 800, 600],
            monthly: [6000, 4800, 3200, 2400],
            yearly: [72000, 57600, 38400, 28800],
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
        {
            label: 'Fashion',
            weekly: [1500, 1200, 800, 600],
            monthly: [6000, 4800, 3200, 2400],
            yearly: [72000, 57600, 38400, 28800],
            backgroundColor: [
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 99, 132, 0.7)',
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
        },
        {
            label: 'Home & Kitchen',
            weekly: [1500, 1200, 800, 600],
            monthly: [1000, 4000, 3900, 2500],
            yearly: [74000, 57300, 38900, 38800],
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 99, 132, 0.7)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
        },
        {
            label: 'Beauty & Personal Care',
            weekly: [1900, 1100, 300, 600],
            monthly: [4000, 3800, 3200, 2400],
            yearly: [82000, 51600, 98400, 38800],
            backgroundColor: [
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 99, 132, 0.7)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
        },
        // Add more datasets for other product categories
    ],
};

const SalesChart = () => {
    const [selectedInterval, setSelectedInterval] = useState('weekly'); // Default to weekly interval
    const [activeButton, setActiveButton] = useState(selectedInterval.toLowerCase());

    const handleIntervalChange = (interval) => {
        setSelectedInterval(interval);
        setActiveButton(interval.toLowerCase());
    };

    const dataWithColors = initialData.datasets.map((dataset, index) => ({
        ...dataset,
        data: dataset[selectedInterval],
    }));

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
        <div style={{ width: '350px', height: '400px', margin: 'auto', marginTop: '-30px',}}>
            <h2 style={{ textAlign: 'center' }}>Sales Funnel Chart</h2>
            <Doughnut data={{ labels: initialData.labels, datasets: dataWithColors }} options={options} />
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <div style={{display: 'flex'}}>
                    <ActionButton
                        label="Week"
                        inverse={true}
                        isActive={activeButton === "weekly"}
                        onClick={() => handleIntervalChange('weekly')}
                    />
                    <ActionButton
                        label="Month"
                        inverse={true}
                        isActive={activeButton === "monthly"}
                        onClick={() => handleIntervalChange('monthly')}
                        style={{ margin: 'auto' }}
                    />
                    <ActionButton
                        label="Year"
                        inverse={true}
                        onClick={() => handleIntervalChange('yearly')}
                    />
                </div>
            </div>
        </div>
    );
};

export default SalesChart;
