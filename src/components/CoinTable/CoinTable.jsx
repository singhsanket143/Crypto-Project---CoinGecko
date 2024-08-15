import { useState, useEffect } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "react-query";
import currencyStore from '../../state/store';
import InfiniteScroll from 'react-infinite-scroll-component';

function CoinTable() {
    const { currency } = currencyStore();
    const [page, setPage] = useState(1);
    const [coins, setCoins] = useState([]);

    const { data, isLoading, isError, error } = useQuery(
        ['coins', page, currency],
        () => fetchCoinData(page, currency),
        {
            cacheTime: 1000 * 60 * 2,
            staleTime: 1000 * 60 * 2,
            keepPreviousData: true,
        }
    );

    useEffect(() => {
        if (data) {
            setCoins(prevCoins => prevCoins.concat(data));

        }
    }, [data]);

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    const fetchMoreData = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
            <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
                <div className="basis-[35%]">Coin</div>
                <div className="basis-[25%]">Price</div>
                <div className="basis-[20%]">24h change</div>
                <div className="basis-[20%]">Market Cap</div>
            </div>

            <div className="flex flex-col w-[80vw] mx-auto">
                <InfiniteScroll
                    dataLength={coins.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    {isLoading && <div>Loading...</div>}
                    {coins.map((coin) => {
                        return (
                            <div key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between">
                                <div className="flex items-center justify-start gap-3 basis-[35%]">
                                    <div className="w-[5rem] h-[5rem]">
                                        <img src={coin.image} className="w-full h-full" alt={`${coin.name} logo`} />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-3xl">{coin.name}</div>
                                        <div className="text-xl">{coin.symbol}</div>
                                    </div>
                                </div>

                                <div className="basis-[25%]">
                                    {coin.current_price}
                                </div>
                                <div className="basis-[20%]">
                                    {coin.price_change_24h}
                                </div>
                                <div className="basis-[20%]">
                                    {coin.market_cap}
                                </div>
                            </div>
                        );
                    })}
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default CoinTable;
