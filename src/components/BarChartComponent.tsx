import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';

interface LineChartProps {
  labels: string[];
  expensesData: number[];
  profitData: number[];
}

const LineChartComponent: React.FC<LineChartProps> = ({ labels, expensesData, profitData }) => {
  const [chartOptions, setChartOptions] = useState<ChartOptions<'line'>>({
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 20,
          padding: 30,
          font: {
            size: 16,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setChartOptions(prevOptions => ({
        ...prevOptions,
        maintainAspectRatio: false, 
        aspectRatio: width / height, 
        layout: {
          padding: {
            bottom: height < 600 ? 10 : 20, 
          },
        },
      }));
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []); 
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Expenses',
        data: expensesData,
        fill: false,
        backgroundColor: '#eb8577',
        borderColor: '#eb8577',
        borderWidth: 1,
      },
      {
        label: 'Profit',
        data: profitData,
        fill: false,
        backgroundColor: '#41e7a8',
        borderColor: '#41e7a8',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Line data={chartData} options={chartOptions} />
  );
};

export default LineChartComponent;
