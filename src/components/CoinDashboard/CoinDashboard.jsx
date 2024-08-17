import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchCoinChartData } from "../../services/fetchCoinChartData";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import CoinDetailCard from "./CoinDetailCard";

function CoinDashboard({ coinId, currency, cardData }) {
  let [days, setDays] = useState(1);

  const { data, isError, isLoading } = useQuery(
    ["chartData", currency, days],
    () => fetchCoinChartData(coinId, currency, days),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    }
  );
  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        <div className="skeleton h-64 w-full"></div>
        <div className="skeleton h-64 w-full"></div>
        <div className="skeleton h-64 w-full"></div>
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  function getTime(date) {
    let hour = date.getHours();
    let munutes = date.getMinutes().toString().padStart(2, "0");
    let timeString = `${hour} : ${munutes} AM`;
    if (hour > 12) {
      timeString = `${(hour - 12).toString().padStart(2, "0")} : ${munutes} PM`;
    }

    return timeString;
  }

  function getPriceLabels(arr) {
    const labels = arr.map((item) => {
      let date = new Date(item[0]);
      let time = getTime(date);
      return days == 1 ? time : date.toLocaleDateString();
    });

    return labels;
  }

  function getPriceData(arr) {
    let priceData = arr.map((item) => item[1]);
    return priceData;
  }


  return (
    <div className="main-container p-5">
      <div className="w-full mb-4 ">
        <CoinDetailCard cardData={cardData} />
      </div>

      <div className="w-full mb-6">
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 flex justify-between w-full rounded-box">
          <li
            onClick={() => {
              setDays(1);
            }}
          >
            <a>24 Hour</a>
          </li>
          <li
            onClick={() => {
              setDays(30);
            }}
          >
            <a>30 Days</a>
          </li>
          <li
            onClick={() => {
              setDays(365);
            }}
          >
            <a>1 Year</a>
          </li>
        </ul>
      </div>
      <div className="chart-container flex flex-col gap-6">
        {/* price chart  */}
        <div className="chart w-full">
          <h1 className="font-light text-3xl mb-2">Price Chart</h1>

          {data.prices ? (
            <>
              <Line
                data={{
                  labels: getPriceLabels(data.prices),
                  datasets: [
                    {
                      data: getPriceData(data.prices),
                      label: `${coinId.toUpperCase()} price in last ${days} days in ${currency}.`,
                      borderColor: "#eb6f36",
                    },
                  ],
                }}
                options={{
                  elements: {
                    point: {
                      radius: 1,
                    },
                  },
                }}
              />
            </>
          ) : (
            <div className="skeleton h-64 w-full"></div>
          )}
        </div>

        {/* market cap chart  */}
        <div className="chart w-full">
          <h1 className="font-light text-3xl mb-2">Market Cap Chart</h1>

          {data.market_caps ? (
            <>
              {/* {getPriceData().join()} */}

              <Line
                data={{
                  labels: getPriceLabels(data.market_caps),
                  datasets: [
                    {
                      data: getPriceData(data.market_caps),
                      label: `${coinId.toUpperCase()} market cap in last ${days} days in ${currency}.`,
                      borderColor: "#ffcc6d8a",
                      fill: {
                        target: "origin",
                        above: "#ffcc6d8a", // Area will be red above the origin
                        below: "#ffcc6d8a", // And blue below the origin
                      },
                    },
                  ],
                }}
                options={{
                  elements: {
                    point: {
                      radius: 1,
                    },
                  },
                }}
              />
            </>
          ) : (
            <div className="skeleton h-64 w-full"></div>
          )}
        </div>

        {/* market cap chart  */}
        <div className="chart w-full">
          <h1 className="font-light text-3xl mb-2">Volume Chart</h1>

          {data.total_volumes ? (
            <>

              <Line
                data={{
                  labels: getPriceLabels(data.total_volumes),
                  datasets: [
                    {
                      data: getPriceData(data.total_volumes),
                      label: `${coinId.toUpperCase()} volume in last ${days} days in ${currency}.`,
                      borderColor: "#eb6f36",
                    },
                  ],
                }}
                options={{
                  elements: {
                    point: {
                      radius: 1,
                    },
                  },
                }}
              />
            </>
          ) : (
            <div className="skeleton h-64 w-full"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CoinDashboard;
