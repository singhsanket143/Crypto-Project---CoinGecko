import React from "react";
import SearhItem from "../SearchBox/SearhItem";
import { useNavigate } from "react-router-dom";

function CryptoDrawer({disable, comapareCoinsData, setCompareCoins}) {
  
  const navigator = useNavigate();

  function deleteCoin (id){
   const newCompareCoinData =  comapareCoinsData.filter(coin => coin.id !== id);
   setCompareCoins(newCompareCoinData);
  }

  function goToComaprePage(coinData){
    const coinIds = coinData.map(coin => coin.id);
    navigator(`/compare/${coinIds[0]}VS${coinIds[1]}`, {state: coinIds});
  }
  


  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className={`drawer-button btn btn-primary fixed bottom-8 right-4 ${disable ? "btn-disabled" : ""}`}
          >
            Compare Crypto
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 gap-3 pr-6">
            {/* Sidebar content here */}
            {comapareCoinsData?.map(coin => <SearhItem deleteCoinFn={deleteCoin} key={coin.id} coinData={coin} compareItem={true}/>)}
          <button className="btn btn-outline h-6 p-2 btn-warning" onClick={() => goToComaprePage(comapareCoinsData)} disabled={disable}>Compare</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CryptoDrawer;
