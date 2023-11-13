import React, { useState } from 'react';
import ActionButton from "/components/ui-components/ActionButton";
import { Line } from 'react-chartjs-2';
import Section from '../ui-components/Section';
import { Chart, BarController, LineElement, CategoryScale, PointElement, LinearScale, registerables } from 'chart.js';

Chart.register(LineElement, BarController, CategoryScale, LinearScale, PointElement);
Chart.register(...registerables)

const PostBuinessAndPersonalChart = () => {
    const [interval, setInterval] = useState('week');
    const [activeButton, setActiveButton] = useState(interval.toLowerCase());

    // Data for different intervals (week, month, year)
    const dataByInterval = {
        week: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Business',
                    data: [10, 12, 15, 20, 18, 22, 25, 28, 30, 27, 23, 20],
                    backgroundColor: 'rgba(255, 99, 132, 0.6)', // Set the line color for Business data
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    tension: 0.4,
                },
                {
                    label: 'Personal',
                    data: [5, 7, 8, 6, 9, 10, 12, 15, 14, 13, 11, 8],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)', // Set the line color for Personal data
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    tension: 0.4,
                },
            ],
        },
        month: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
                {
                    label: 'Business',
                    data: [30, 25, 20, 28],
                    backgroundColor: 'rgba(255, 99, 132, 0.6)', // Set the line color for Business data
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    tension: 0.4,
                },
                {
                    label: 'Personal',
                    data: [18, 22, 15, 20],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)', // Set the line color for Personal data
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    tension: 0.4,
                },
            ],
        },
        year: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Business',
                    data: [150, 180, 200, 170],
                    backgroundColor: 'rgba(255, 99, 132, 0.6)', // Set the line color for Business data
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    tension: 0.4,
                },
                {
                    label: 'Personal',
                    data: [80, 85, 75, 90],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)', // Set the line color for Personal data
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    tension: 0.4,
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
        scales: {
            x: {
                grid: {
                    display: false,
                },
                type: 'category',
            },
            y: {
                ticks: {
                    stepSize: 5,
                    callback: (value) => value + 'K',
                },
                grid: {
                    borderDash: [5],
                },
            },
        },
    };

    const handleIntervalChange = (selectedInterval) => {
        setInterval(selectedInterval);
        setActiveButton(selectedInterval.toLowerCase());
    };

    return (
        <div style={{ width: '600px', height: '400px', margin: 'auto' }}>
            <h2 style={{ textAlign: 'center' }}>Business Posts vs. Personal Posts</h2>
            <Line data={dataByInterval[interval]} options={options} />
            <div style={{ textAlign: 'center', marginTop: '10px', justifyContent: 'space-between' }}>
                <Section>
                    <ActionButton
                        label="Week"
                        isActive={activeButton === "week"}
                        inverse={true}
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
                        inverse={true}
                        isActive={activeButton === "year"}
                        onClick={() => handleIntervalChange('year')}
                    />


                </Section>

            </div>
        </div>
    );
};

export default PostBuinessAndPersonalChart;
