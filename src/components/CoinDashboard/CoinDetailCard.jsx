import React from "react";
import currencyStore from "../../state/store";


function CoinDetailCard({ cardData }) {

  const { currency } = currencyStore();


  return (
    <>
      {cardData ? (
        <div className="w-full h-full gap-3 grid grid-cols-2 md:grid-cols-3 p-2 ">
          <div className="bg-[#ffcc6d8a] p-3 h-fit flex flex-col gap-1 font-bold rounded-md">
            <h2>Market Cap</h2>
            <p className="font-thin text-xl">{currency == "usd" ? "$" : "₹"}{cardData.marketCap}</p>
          </div>

          <div className="bg-[#ffcc6d8a]  p-3 h-fit flex flex-col gap-1 font-bold rounded-md">
            <h2>All Time High</h2>
            <p className="font-thin text-xl">{currency == "usd" ? "$" : "₹"}{cardData.alh}</p>
          </div>

          <div className="bg-[#ffcc6d8a]  p-3 h-fit flex flex-col gap-1 font-bold rounded-md">
            <h2>All Time Low</h2>
            <p className="font-thin text-xl">{currency == "usd" ? "$" : "₹"}{cardData.atl}</p>
          </div>

          <div className="bg-[#ffcc6d8a]  p-3 h-fit flex flex-col gap-1 font-bold rounded-md">
            <h2>Total Volume</h2>
            <p className="font-thin text-xl">{currency == "usd" ? "$" : "₹"}{cardData.totalVolume}</p>
          </div>

          <div className="bg-[#ffcc6d8a]  p-3 h-fit flex flex-col gap-1 font-bold rounded-md">
            <h2>Price change in 24h</h2>
            <p className="font-thin text-xl">{cardData.change24h}%</p>
          </div>

          <div className="bg-[#ffcc6d8a]  p-3 h-fit flex flex-col gap-1 font-bold rounded-md">
            <h2>Price change in 1 year</h2>
            <p className="font-thin text-xl">{cardData.change1y}%</p>
          </div>
        </div>
      ) : (
        <div className="skeleton h-64 w-full"></div>
      )}
    </>
  );
}

export default CoinDetailCard;
