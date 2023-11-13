import React, { useState } from 'react';
import Section from '../ui-components/Section';
import ActionButton from "/components/ui-components/ActionButton";
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, PointElement, LinearScale } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const initialData = {
    week: {
        labels: ['May 1', 'May 2', 'May 3', 'May 4', 'May 5', 'May 6', 'May 7'],
        datasets: [
            {
                label: 'Reports',
                data: [5, 3, 7, 6, 9, 8, 10],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: 'Attended Reports',
                data: [3, 2, 5, 4, 7, 6, 8],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: 'Ignored Reports',
                data: [1, 0, 1, 1, 2, 1, 2],
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: 'Pending Reports',
                data: [1, 1, 1, 1, 0, 1, 0],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    },
    month: {
        labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
        datasets: [
            {
                label: 'Reports',
                data: [15, 12, 18, 20, 14, 16, 22],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: 'Attended Reports',
                data: [12, 9, 15, 16, 10, 13, 20],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: 'Ignored Reports',
                data: [2, 1, 2, 2, 3, 2, 1],
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: 'Pending Reports',
                data: [1, 2, 1, 2, 1, 1, 1],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    },
    year: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Reports',
                data: [100, 120, 90, 80, 110, 105, 130, 140, 125, 135, 120, 150],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: 'Attended Reports',
                data: [80, 100, 75, 70, 90, 88, 110, 120, 105, 115, 100, 130],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: 'Ignored Reports',
                data: [15, 12, 10, 8, 12, 10, 14, 15, 12, 10, 12, 14],
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: 'Pending Reports',
                data: [5, 8, 5, 2, 8, 7, 6, 5, 8, 10, 8, 6],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    },
};

const LineChart = ({ data, interval }) => {
    const [selectedInterval, setSelectedInterval] = useState(interval);
    const [activeButton, setActiveButton] = useState(interval.toLowerCase());

    const handleButtonClick = (label) => {
        setActiveButton(label.toLowerCase());
        setSelectedInterval(label.toLowerCase());
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
                ticks: {
                    stepSize: 20,
                    callback: (value) => value,
                },
                grid: {
                    borderDash: [5],
                },
            },
        },
    };

    const handleIntervalChange = (selectedInterval) => {
        setSelectedInterval(selectedInterval);
    };

    if (!data[selectedInterval]) {
        return null; // Return null if the selected interval data is missing or undefined
    }

    return (
        <div style={{ width: '600px', height: '400px', margin: 'auto' }}>
            <h2 style={{ textAlign: 'center' }}>Reports Chart</h2>
            <Line data={data[selectedInterval]} options={options} />
            <div style={{ textAlign: 'center', marginTop: '10px', justifyContent: 'space-between' }}>
                <Section>
                    <ActionButton
                        label="Week"
                        isActive={activeButton === "week"}
                        inverse={true}
                        onClick={() => handleButtonClick('Week')}
                    />
                    <ActionButton
                        label="Month"
                        isActive={activeButton === "month"}
                        inverse={true}
                        onClick={() => handleButtonClick('Month')}
                        style={{ margin: 'auto' }}
                    />
                    <ActionButton
                        label="Year"
                        isActive={activeButton === "year"}
                        inverse={true}
                        onClick={() => handleButtonClick('Year')}
                    />
                </Section>

            </div>
        </div>
    );
};

const ReportsChart = () => {
    return (
        <>
            <LineChart data={initialData} interval="week" />
        </>
    );
};

export default ReportsChart;
