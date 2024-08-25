import React from "react";
import CompareTableRow from "./CompareTableRow";
import useFetchTwoCoinData from "../../hooks/useFetchTwoCoinData";



function CompareTable({ coinIDs }) {

  let {coin1Data, coin2Data, isCoin1Error, isCoin2Error, isCoin1Loading, isCoin2Loading, currency} = useFetchTwoCoinData(coinIDs);
  console.log(coin1Data, coin2Data);

  if (isCoin1Loading || isCoin2Loading) {
    return <div className="skeleton h-screen w-screen "></div>;
  }

  if (isCoin1Error || isCoin2Error) {
    return <div>Error</div>;
  }

  return (
    <div className="container mx-auto border border-white">
      <table className="min-w-full shadow-md rounded-lg border-collapse">
        <thead>
          <tr>
            <th className="py-3 px-6 bg-yellow-500 text-left text-sm font-bold uppercase tracking-wider">
              Differences
            </th>
            <th className="py-3 px-6 bg-yellow-500 text-left text-sm font-bold uppercase tracking-wider">
            {coin1Data?.name}
            </th>
            <th className="py-3 px-6 bg-yellow-500 text-left text-sm font-bold uppercase tracking-wider">
            {coin2Data?.name}
            </th>
          </tr>
        </thead>
        {coin1Data && coin2Data ? <tbody>
            <CompareTableRow data1={coin1Data?.image?.thumb} img={true} data2={coin2Data?.image?.thumb} diff={"Image"}/>
            <CompareTableRow data1={coin1Data?.market_cap_rank} data2={coin2Data?.market_cap_rank} diff={"Rank"}/>
            <CompareTableRow type="currency" data1={coin1Data?.market_data?.current_price[currency]} data2={coin2Data?.market_data?.current_price[currency]} diff={"Current Price"}/>
            <CompareTableRow type="currency" data1={coin1Data?.market_data?.ath[currency]} data2={coin2Data?.market_data?.ath[currency]} diff={"All Time High"}/>
            <CompareTableRow type="currency" data1={coin1Data?.market_data?.atl[currency]} data2={coin2Data?.market_data?.atl[currency]} diff={"All Time Low"}/>
            <CompareTableRow type="percentage" data1={coin1Data?.market_data?.price_change_percentage_24h} data2={coin2Data?.market_data?.price_change_percentage_24h} diff={"24 Hour Return"}/>
            <CompareTableRow type="percentage" data1={coin1Data?.market_data?.price_change_percentage_30d} data2={coin2Data?.market_data?.price_change_percentage_30d} diff={"1 Month Return"}/>
            <CompareTableRow type="percentage" data1={coin1Data?.market_data?.price_change_percentage_1y} data2={coin2Data?.market_data?.price_change_percentage_1y} diff={"1 Year Return"}/>
            <CompareTableRow type="currency" data1={coin1Data?.market_data?.market_cap[currency]} data2={coin2Data?.market_data?.market_cap[currency]} diff={"Market Cap"}/>

        </tbody> : <div></div>}
      </table>
    </div>
  );
}

export default CompareTable;
