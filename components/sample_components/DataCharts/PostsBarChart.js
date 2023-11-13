import React, { useState } from 'react';
import ActionButton from "/components/ui-components/ActionButton";
import Section from '../ui-components/Section';
import { Bar } from 'react-chartjs-2';
import { Chart, LineElement, BarController, CategoryScale, PointElement, LinearScale, registerables } from 'chart.js';

Chart.register(LineElement, BarController,CategoryScale, LinearScale, PointElement);
Chart.register(...registerables)

const PostBarChart = () => {
    const [interval, setInterval] = useState('month');
    const [activeButton, setActiveButton] = useState(interval.toLowerCase());

    // Data for different intervals (week, month, year)
    const dataByInterval = {
        week: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
                {
                    label: 'Business',
                    data: [5, 7, 3, 6],
                    backgroundColor: 'rgba(138, 43, 226, 0.6)', // Set the bar color to purple
                    borderColor: 'rgba(138, 43, 226, 1)',
                    borderWidth: 1,
                    tension: 0.5,
                },
                {
                    label: 'Personal',
                    data: [4, 6, 2, 5],
                    backgroundColor: 'rgba(255, 99, 132, 0.6)', // Set the bar color to red
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    tension: 0.5,
                },
            ],
        },
        month: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Business',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'rgba(138, 43, 226, 0.6)', // Set the bar color to purple
                    borderColor: 'rgba(138, 43, 226, 1)',
                    borderWidth: 1,
                    tension: 0.5,
                },
                {
                    label: 'Personal',
                    data: [9, 12, 5, 8, 4, 6],
                    backgroundColor: 'rgba(255, 99, 132, 0.6)', // Set the bar color to red
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    tension: 0.5,
                },
            ],
        },
        year: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Business',
                    data: [40, 35, 45, 50],
                    backgroundColor: 'rgba(138, 43, 226, 0.6)', // Set the bar color to purple
                    borderColor: 'rgba(138, 43, 226, 1)',
                    borderWidth: 1,
                    tension: 0.5,
                },
                {
                    label: 'Personal',
                    data: [28, 32, 25, 30],
                    backgroundColor: 'rgba(255, 99, 132, 0.6)', // Set the bar color to red
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    tension: 0.5,
                },
            ],
        },
    };

    const options = {
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            x: {
                type: 'category',// Keep the grid for the X-axis
            },
            y: {
                beginAtZero: true,
                // Keep the grid for the Y-axis
            },
        },
    };

    const handleIntervalChange = (selectedInterval) => {
        setInterval(selectedInterval);
        setActiveButton(selectedInterval.toLowerCase());
    };

    return (
        <div style={{ width: '600px', height: '400px', margin: 'auto' }}>
            <h3 style={{ textAlign: 'center' }}>Posts Chart</h3>
            <Bar data={dataByInterval[interval]} options={options} />
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
                        isActive={activeButton === "month"}
                        onClick={() => handleIntervalChange('month')}
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

export default PostBarChart;
