import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { longDecimalToShort, numToCrConvert } from "../util/util";
import axiosInstance from "../../helpers/axiosInstance";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

function CoinTable() {

    const navigate = useNavigate();

    let {tableData, setTableData, currency, hasMore, fetchMore} = useInfiniteScroll();


    useEffect(() => {
        setTableData([]);
        axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=1`)
        .then((res) => setTableData(res.data))
        .catch((err) => console.log(err));
    }, [currency])



 

    function handleCoinRedirect(id) {
        navigate(`/details/${id}`);
    }

    return (
        <InfiniteScroll
        dataLength={tableData.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={<div className="w-full grid place-content-center pb-3"><span className="loading loading-spinner loading-lg"></span></div>}
      >
        <div className="my-5 flex flex-col items-center justify-center gap-5 w-[95vw] md:w-[80vw] mx-auto">
            <div className="w-full bg-yellow-400 flex py-4 px-2 font-semibold items-center justify-center">
                {/* Header of the table */}
                <div className="basis-[35%]">
                    Coin 
                </div>
                <div  className="basis-[25%]">
                    Price 
                </div>
                <div  className="basis-[20%]">
                    24h change 
                </div>
                <div  className="basis-[20%]">
                    Market Cap
                </div>
            </div>

            <div className="flex flex-col w-[95vw] md:w-[80vw] mx-auto">
                {tableData && tableData.map((coin) => {
                    return (
                        <div onClick={() => handleCoinRedirect(coin.id)} key={coin.id} className="w-full bg-transparent flex py-4 px-2 font-semibold items-center justify-between cursor-pointer">
                            <div className="flex items-center justify-start gap-3 basis-[35%]">

                                <div className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem]">
                                    <img src={coin.image} className="w-full h-full" loading="lazy"/>
                                </div>

                                <div className="flex flex-col"> 
                                    <div className="text-lg md:text-3xl">{coin.name}</div>
                                    <div className="text-xl">{coin.symbol}</div>
                                </div>


                            </div>

                            <div className="basis-[25%]">
                                {coin.current_price}
                            </div>
                            <div className="basis-[20%]">
                                ~ {longDecimalToShort(coin.price_change_24h)}
                            </div>
                            <div className="basis-[20%]">
                                {numToCrConvert(coin.market_cap)} Cr.
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        </InfiniteScroll>
    )
}

export default CoinTable;