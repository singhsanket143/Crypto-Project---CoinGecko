import { useState } from "react";
import { fetchCoinChartData } from "../services/fetchCoinChartData";
import { useQuery } from "react-query";



function useFetchTwoCoinChartData(coinIds, currency) {

    let [days, setDays] = useState(1);

  const { data : data1, isError : isError1, isLoading : isLoading1 } = useQuery(
    ["chartData1", coinIds[0], currency, days],
    () => fetchCoinChartData(coinIds[0], currency, days),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    }
  );

  const { data : data2, isError : isError2, isLoading : isLoading2 } = useQuery(
    ["chartData2", coinIds[1], currency, days],
    () => fetchCoinChartData(coinIds[1], currency, days),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    }
  );


  return {
    data1,
    data2,
    days,
    setDays,
    isError1,
    isError2,
    isLoading1,
    isLoading2,
  };
}

export default useFetchTwoCoinChartData;


