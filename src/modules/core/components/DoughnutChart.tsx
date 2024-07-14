import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ChartOptions, TooltipItem, TooltipModel } from "chart.js";

interface DoughnutChartProps {
  companyData: {
    totalSumLastMonthPackages: number;
    totalSumLastMonthProfit: number;
    totalSumLastMonthOfSalary: number;
  };
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ companyData }) => {
  const data = {
    labels: ["Services", "Profit", "Expenses"],
    datasets: [
      {
        label: "% of Total",
        data: [
          companyData.totalSumLastMonthPackages,
          companyData.totalSumLastMonthProfit,
          companyData.totalSumLastMonthOfSalary,
        ],
        backgroundColor: ["#2a9ce6", "#41e7a8", "#eb8577"],
        borderColor: ["#2a9ce6", "#41e7a8", "#eb8577"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 20,
          padding: 30,
          font: {
            size: 13,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function(this: TooltipModel<"doughnut">, tooltipItem: TooltipItem<"doughnut">) {
            const dataset: any = this.chart.data.datasets[tooltipItem.datasetIndex];
            const total: number = dataset.data.reduce((a: number, b: number) => a + b, 0);
            const value: number = dataset.data[tooltipItem.dataIndex];
            const percentage: string = `${((value / total) * 100).toFixed(2)}%`;
            return ` ${tooltipItem.label}: ${tooltipItem.formattedValue} (${percentage})`;
          },
        },
      },
    },
    layout: {
      padding: {
        bottom: 20,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;