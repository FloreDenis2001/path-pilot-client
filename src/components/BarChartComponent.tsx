import React from 'react';
import { Bar } from 'react-chartjs-2';

interface BarChartProps {
  labels: string[];
  expensesData: number[];
  profitData: number[];
}

const BarChartComponent: React.FC<BarChartProps> = ({ labels, expensesData, profitData }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Expenses',
        data: expensesData,
        backgroundColor: '#eb8577',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Profit',
        data: profitData,
        backgroundColor: '#41e7a8',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
      <Bar data={chartData} options={options} />
  );
};

export default BarChartComponent;
