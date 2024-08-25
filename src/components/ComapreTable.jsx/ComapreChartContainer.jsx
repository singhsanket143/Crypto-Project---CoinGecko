import React from "react";
import useFetchTwoCoinChartData from "../../hooks/useFetchTwoCoinChartData";
import currencyStore from "../../state/store";
import CompareChart from "./CompareChart";

function ComapreChartContainer({ coinIds }) {
  let { currency } = currencyStore();

  let {
    data1,
    data2,
    isLoading1,
    isLoading2,
    isError1,
    isError2,
    days,
    setDays,
  } = useFetchTwoCoinChartData(coinIds, currency);

  if (isLoading1 || isLoading2) {
    return (
      <div className="flex flex-col gap-6">
        <div className="skeleton h-64 w-full"></div>
      </div>
    );
  }

  if (isError1 || isError2) {
    return <div>Error</div>;
  }

  return (
    <div className="mx-2 my-3">
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

      <div className="chart w-full container">
        <h1 className="font-light text-3xl mb-2">Price Chart Compare</h1>
        {data1.prices || data2.prices ? (
          <>
            <CompareChart
              data1={data1}
              data2={data2}
              days={days}
              coinIds={coinIds}
            />
          </>
        ) : (
          <div className="skeleton h-64 w-full"></div>
        )}
      </div>
    </div>
  );
}

export default ComapreChartContainer;
