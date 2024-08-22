import { useNavigate } from "react-router-dom";
import { longDecimalToShort, numToCrConvert } from "../util/util";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import CryptoDrawer from "../CrytoDrawer/CryptoDrawer";
import { useEffect, useState } from "react";

function CoinTable() {
  const navigate = useNavigate();
  const [compareCoins, setCompareCoins] = useState([]);

  const { tableData, hasMore, fetchMore } = useInfiniteScroll();
  console.log(tableData);

  function handleCoinRedirect(id) {
    navigate(`/details/${id}`);
  }

  function addToCompareOnClick(e, {image, id, name, symbol, market_cap_rank}) {
      e.stopPropagation();
    if (compareCoins.length >= 2){
        console.log("Two Items Already addded");
        return;
    }
    const coinObj = {
        id : id,
        name : name,
        symbol : symbol, 
        thumb : image,
        market_cap_rank : market_cap_rank
    }
    setCompareCoins([...compareCoins, coinObj]);
    e.target.textContent = "Added ✔️"
  }


  return (
    <InfiniteScroll
      dataLength={tableData.length}
      next={fetchMore}
      hasMore={hasMore}
      loader={
        <div className="w-full grid place-content-center pb-3">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      }
      endMessage={<p>No more coins to load</p>}
      refreshFunction={() => {}}
      pullDownToRefresh={false}
    >
      <div className="my-5 flex flex-col items-center justify-center gap-5 w-[95vw] md:w-[80vw] mx-auto">
        <div className="w-full text-black bg-yellow-400 flex py-4 px-2 font-semibold items-center justify-center">
          {/* Header of the table */}
          <div className="basis-[35%] flex gap-2 items-center">
            <p>Coin</p>
            <CryptoDrawer comapareCoinsData={compareCoins} setCompareCoins={setCompareCoins} disable={compareCoins.length < 2} />
          </div>
          <div className="basis-[25%]">Price</div>
          <div className="basis-[20%]">24h change</div>
          <div className="basis-[20%]">Market Cap</div>
        </div>

        <div className="flex flex-col w-[95vw] md:w-[80vw] mx-auto">
          {tableData.map((coin) => (
            <div
              onClick={() => handleCoinRedirect(coin.id)}
              key={coin.id}
              className="w-full bg-transparent flex py-4 px-2 font-semibold items-center justify-between cursor-pointer"
            >
              <div className="flex items-center justify-start gap-3 basis-[35%]">
                <div className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem]">
                  <img
                    src={coin.image}
                    className="w-full h-full"
                    loading="lazy"
                    alt={`${coin.name} logo`}
                  />
                </div>

                <div className="flex flex-col">
                  <div className="text-lg md:text-3xl">{coin.name}</div>
                  <div className="text-xl font-light flex items-center gap-1">
                    <p>{coin.symbol}</p>
                    <button
                    disabled={compareCoins.length >= 2}
                      onClick={(e) => addToCompareOnClick(e, coin)}
                      className="leading-none whitespace-nowrap h-4 w-fit px-1 grid place-content-center rounded-2xl bg-yellow-700 text-white text-xs"
                    >
                      Add to compare
                    </button>
                  </div>
                </div>
              </div>

              <div className="basis-[25%]">{coin.current_price}</div>
              <div className="basis-[20%]">
                ~ {longDecimalToShort(coin.price_change_24h)}
              </div>
              <div className="basis-[20%]">
                {numToCrConvert(coin.market_cap)} Cr.
              </div>
            </div>
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default CoinTable;
