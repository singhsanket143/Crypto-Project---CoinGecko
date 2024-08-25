import React from 'react'
import currencyStore from "../../state/store"
import { getPriceData, getPriceLabels } from '../util/util';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

function CompareChart({data1, data2, coinIds, days}) {
    let {currency} = currencyStore();
  return (
      <Line
              className="max-h-[500px]"
              data={{
                labels: getPriceLabels(data1.prices, days),
                datasets: [
                  {
                    data: getPriceData(data1.prices),
                    label: `${coinIds[0].toUpperCase()} price in last ${days} days in ${currency}`,
                    borderColor: "#eb6f36",
                    backgroundColor: "rgba(235, 111, 54, 0.2)",
                    borderWidth: 2,
                    yAxisID: "y",
                  },
                  {
                    data: getPriceData(data2.prices),
                    label: `${coinIds[1].toUpperCase()} price in last ${days} days in ${currency}`,
                    borderColor: "#36a2eb",
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    borderWidth: 2,
                    yAxisID: "y1",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 0,
                  },
                },
                scales: {
                  x: {
                    ticks: {
                      maxTicksLimit: 6,
                      maxRotation: 0,
                      autoSkip: true,
                    },
                  },
                  y: {
                    type: "linear",
                    position: "left",
                    title: {
                      display: true,
                      text: `${coinIds[0].toUpperCase()} Price (${currency})`,
                    },
                    grid: {
                      drawOnChartArea: true,
                    },
                  },
                  y1: {
                    type: "linear",
                    position: "right",
                    title: {
                      display: true,
                      text: `${coinIds[1].toUpperCase()} Price (${currency})`,
                    },
                    grid: {
                      drawOnChartArea: false,
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: true,
                    position: "top",
                  },
                  tooltip: {
                    mode: "index",
                    intersect: false,
                    callbacks: {
                      label: function (context) {
                        return `${context.dataset.label}: ${context.formattedValue} ${currency}`;
                      },
                    },
                  },
                },
                maintainAspectRatio: false,
              }}
            />
  )
}

export default CompareChart
