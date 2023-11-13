import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Section from '../ui-components/Section';
import ActionButton from "/components/ui-components/ActionButton";
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale);

const initialData = {
    week: {
        labels: ['May 1', 'May 2', 'May 3', 'May 4', 'May 5', 'May 6', 'May 7'],
        datasets: [
            {
                label: 'Reported Users',
                data: [100, 120, 80, 90, 110, 105, 130],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: 'Reported Posts',
                data: [20, 15, 22, 18, 25, 23, 30],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: 'Reported Business',
                data: [10, 8, 12, 11, 14, 13, 16],
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    },
    month: {
        labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
        datasets: [
            {
                label: 'Reported Users',
                data: [300, 320, 280, 290, 310, 305, 330],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: 'Reported Posts',
                data: [60, 50, 65, 70, 55, 63, 80],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: 'Reported Business',
                data: [30, 28, 32, 31, 34, 33, 36],
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    },
    year: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Reported Users',
                data: [1200, 1300, 1150, 1100, 1250, 1205, 1330, 1400, 1225, 1350, 1200, 1500],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: 'Reported Posts',
                data: [240, 260, 230, 220, 250, 245, 260],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: 'Reported Business',
                data: [120, 130, 115, 110, 125, 120, 133],
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    },
};



const BarChart = ({ data, interval }) => {
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
                    stepSize: 100,
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
            <h2 style={{ textAlign: 'center' }}>Reported Data Chart</h2>
            <Bar data={data[selectedInterval]} options={options} />
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
            <BarChart data={initialData} interval="week" />
        </>
    );
};

export default ReportsChart;
