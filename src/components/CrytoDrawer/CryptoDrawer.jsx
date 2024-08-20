import React from "react";
import SearhItem from "../SearchBox/SearhItem";

function CryptoDrawer({disable, comapareCoinsData}) {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className={`drawer-button btn btn-primary ${disable ? "btn-disabled" : ""}`}
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
            {comapareCoinsData?.map(coin => <SearhItem key={coin.id} coinData={coin} eventDisabled={true}/>)}
          <button className="btn btn-outline h-6 p-2 btn-warning">Compare</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CryptoDrawer;
