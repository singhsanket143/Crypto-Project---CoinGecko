import { useState, useEffect } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "react-query";
import currencyStore from '../../state/store';
import { useNavigate } from "react-router-dom";
import PageLoader from "../PageLoader/PageLoader";
import Loader from "../PageLoader/Seach";


function CoinTable() {
    const { currency } = currencyStore();
    const navigate = useNavigate();
    
    const [page, setPage] = useState(1);
    const [coins, setCoins] = useState([]);

    const { data, isLoading, isError, error, isFetching } = useQuery(
        ['coins', page, currency],
        () => fetchCoinData(page, currency),
        {
            keepPreviousData: true,
        }
    );
     
    useEffect(() => {
        if (data) {
            setCoins(prevCoins => [...prevCoins, ...data]);
        }
    }, [data]);

    useEffect(() => {
        function handleScroll() {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !isFetching) {
                if(!isFetching) <div className="text-center bg-red-500">loading...</div>
                setPage(prevPage => prevPage + 1);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isFetching]);
    {if(isLoading) return <PageLoader/>}
    function handleCoinRedirect(id) {
        navigate(`/details/${id}`);
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
            <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
                <div className="basis-[35%]">Coin</div>
                <div className="basis-[25%]">Price</div>
                <div className="basis-[20%]">24h change</div>
                <div className="basis-[20%]">Market Cap</div>
            </div>

            <div className="flex flex-col w-[80vw] mx-auto">
                {coins.map((coin) => (
                    <div
                        onClick={() => handleCoinRedirect(coin.id)}
                        key={coin.id}
                        className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer"
                    >
                        <div className="flex items-center justify-start gap-3 basis-[35%]">
                            <div className="w-[5rem] h-[5rem]">
                                <img src={coin.image} className="w-full h-full" alt={coin.name} loading="lazy" />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-3xl">{coin.name}</div>
                                <div className="text-xl">{coin.symbol}</div>
                            </div>
                        </div>
                        <div className="basis-[25%]">{coin.current_price}</div>
                        <div className="basis-[20%]">{coin.price_change_24h}</div>
                        <div className="basis-[20%]">{coin.market_cap}</div>
                    </div>
                ))}
            </div>

            {isFetching && <div className="text-center"><Loader /></div>}
            {!isFetching && <div className="text-center"><Loader /></div>}
            {isLoading && <div className="text-center">is loading...</div>}

        
            
        </div>
    );
}

export default CoinTable;
