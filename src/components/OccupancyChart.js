import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './PieChart.module.css';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const monthlyData = [
  { month: 'May', value: 85 },
  { month: 'Jun', value: 65 },
  { month: 'Jul', value: 80 },
  { month: 'Aug', value: 45 },
  { month: 'Sep', value: 95 },
  { month: 'Oct', value: 85 },
  { month: 'Nov', value: 85 },
  { month: 'Dec', value: 85 },
  { month: 'Jan', value: 95 },
  { month: 'Feb', value: 94 },
];

export const OccupancyChart = () => {
  const chartData = {
    labels: monthlyData.map((data) => data.month),
    datasets: [
      {
        label: 'Occupancy (%)',
        data: monthlyData.map((data) => data.value),
        backgroundColor: '#42A5F5',
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          callback: (value) => `${value}%`,
        },
        grid: {
          color: '#ebedef',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div
      className={styles.container}
      role="region"
      aria-label="Occupancy Statistics Chart"
    >
      <div className={styles.header}>
        <h2 className={styles.title}>Occupancy Statistics</h2>
      </div>

      <div className={styles.chartContainer}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};
