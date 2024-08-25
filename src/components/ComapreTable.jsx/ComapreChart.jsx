import React from 'react'
import useFetchCoinDashboardData from '../../hooks/useFetchCoinDashboardData'
import currencyStore from "../../state/store";
import useFetchTwoCoinChartData from '../../hooks/useFetchTwoCoinChartData';

function ComapreChart({coinIds}) {

  const {currency} = currencyStore();

    let {data1, data2, isLoading1, isLoading2, isError1, isError2, days, setDays} = useFetchTwoCoinChartData(coinIds, currency);

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
    <div>
      
    </div>
  )
}

export default ComapreChart
