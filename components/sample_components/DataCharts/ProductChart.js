import React, { useState } from 'react';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarController, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Section from '../ui-components/Section';
import ActionButton from "/components/ui-components/ActionButton";

// Register necessary chart components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarController, BarElement, Tooltip, Legend);

const weeklyData = {
    labels: ['Starting', 'Product Sales', 'Refunds', 'Shipping', 'Tax', 'Net Sales'],
    datasets: [
        {
            type: 'bar',
            label: 'Category 1',
            data: [200, 100, -20, -100, -150, 1450],
            backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(153, 102, 255, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1,
        },
        {
            type: 'bar',
            label: 'Category 2',
            data: [1800, 1300, -150, -90, -120, 1040],
            backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(153, 102, 255, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1,
        },
        // Add more datasets for other product categories
        {
            type: 'bar',
            label: 'Category 3',
            data: [2200, 1600, -180, -120, -170, 1510],
            backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(153, 102, 255, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1,
        },
    ],
};

const monthlyData = {
    // Data for the monthly interval
    labels: ['Starting', 'Product Sales', 'Refunds', 'Shipping', 'Tax', 'Net Sales'],
    datasets: [
        {
            type: 'bar',
            label: 'Category 1',
            data: [2000, 1500, -200, -100, -150, 1050],
            backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(153, 102, 255, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1,
        },
        {
            type: 'bar',
            label: 'Category 2',
            data: [1800, 1300, -150, -90, -120, 1040],
            backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(153, 102, 255, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1,
        },
        // Add more datasets for other product categories
        {
            type: 'bar',
            label: 'Category 3',
            data: [2200, 1600, -180, -120, -170, 1510],
            backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(153, 102, 255, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1,
        },
    ],
};

const yearlyData = {
    // Data for the yearly interval
    labels: ['Starting', 'Product Sales', 'Refunds', 'Shipping', 'Tax', 'Net Sales'],
    datasets: [
        {
            type: 'bar',
            label: 'Category 1',
            data: [2000, 1500, -200, -100, -150, 1050],
            backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(153, 102, 255, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1,
        },
        {
            type: 'bar',
            label: 'Category 2',
            data: [190230, 178400, -1502, -90634, -12084, 10029],
            backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(153, 102, 255, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1,
        },
        // Add more datasets for other product categories
        {
            type: 'bar',
            label: 'Category 3',
            data: [2200, 1600, -180, -120, -170, 1510],
            backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(153, 102, 255, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1,
        },
    ],
};

const ProductChart = () => {
    const [selectedInterval, setSelectedInterval] = useState('weekly');
    const [activeButton, setActiveButton] = useState(selectedInterval.toLowerCase());

    const options = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    const handleIntervalChange = (interval) => {
        setSelectedInterval(interval);
        setActiveButton(interval.toLowerCase());
    };

    const getDataByInterval = () => {
        switch (selectedInterval) {
            case 'weekly':
                return weeklyData;
            case 'monthly':
                return monthlyData;
            case 'yearly':
                return yearlyData;
            default:
                return weeklyData;
        }
    };

    return (
        <div style={{ width: '600px', height: '400px', margin: 'auto',}}>
            <h2 style={{ textAlign: 'center' }}>E-Commerce Chart</h2>
            <Bar data={getDataByInterval()} options={options} />
            <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '-400px', justifyContent: 'space-between' }}>
                <Section>
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
                        isActive={activeButton === "yearly"}
                        onClick={() => handleIntervalChange('yearly')}
                    />
                </Section>
            </div>
        </div>
    );
};

export default ProductChart;
