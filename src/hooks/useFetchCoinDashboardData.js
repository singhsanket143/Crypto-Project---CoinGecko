import { fetchCoinChartData } from "../services/fetchCoinChartData";
import { useQuery } from "react-query";
import React, { useState } from "react";

function useFetchCoinDashboardData(coinId, currency) {
  let [days, setDays] = useState(1);

  const { data, isError, isLoading } = useQuery(
    ["chartData", coinId, currency, days],
    () => fetchCoinChartData(coinId, currency, days),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    }
  );

  return {
    data,
    days,
    setDays,
    isError,
    isLoading,
  };
}

export default useFetchCoinDashboardData;
