import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ChartOptions } from "chart.js";

const data = {
  labels: ["Shipments", "Profit", "Expenses"],
  datasets: [
    {
      label: "% of Total",
      data: [15, 25, 54],
      backgroundColor: ["#8b77eb", "#41e7a8", "#eb8577"],
      borderColor: ["#8b77eb", "#41e7a8", "#eb8577"],
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
  },
  layout: {
    padding: {
      bottom: 20,
    },
  },
};

const DoughnutChart = () => <Doughnut data={data} options={options} />;

export default DoughnutChart;
