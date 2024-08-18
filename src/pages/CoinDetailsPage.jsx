import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../services/fetchCoinDetails";
import currencyStore from '../state/store';
import parse from 'html-react-parser';
import PageLoader from "../components/PageLoader/PageLoader";
import { fetchHistoricalPrice } from "../services/fetchHistoricalPrice";
import LineGraph from "../components/LineGraph/LineGraph";
import { useEffect, useState } from "react";



function CoinDetailsPage() {
    const { coinId } = useParams();
    const { currency } = currencyStore();
    const [selectedOption, setSelectedOption] = useState('7d');

    const { isError, isLoading, data: coin } = useQuery(["coin", coinId], () => fetchCoinDetails(coinId), {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    const { data: historicalData, refetch: refetchHistoricalData } = useQuery(['historical', coinId, currency, selectedOption], () => fetchHistoricalPrice(coinId, currency, selectedOption), {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    useEffect(() => {
        refetchHistoricalData();
    }, [currency, refetchHistoricalData, selectedOption]);

    if (isLoading) {
        return <PageLoader />
    }

    if (isError) {
        return <div>Error: Something went wrong</div>
    }

    return (
        <div className="flex flex-col md:flex-row">
            <div
                className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500"
            >
                <img 
                    alt={coin?.name}
                    src={coin?.image?.large}
                    className="h-52 mb-5"
                />

                <h1
                    className="text-4xl font-bold mb-5"
                >
                    {coin?.name}
                </h1>

                <p
                    className="w-full px-6 py-4 text-justify"
                >
                    {parse(coin?.description?.en)}
                </p>

                <div
                    className="w-full flex flex-col md:flex-row md:justify-around"
                >
                    <div 
                        className="flex items-center mb-4 md:mb-0"
                    >
                        <h2 className="text-xl font-bold ">
                            Rank
                        </h2>
                        <span className="ml-3 text-xl ">
                            {coin?.market_cap_rank}
                        </span>
                    </div>

                    <div className="flex items-center mb-4 md:mb-0">
                        <h2 className="text-xl text-yellow-400 font-bold ">
                            Current Price
                        </h2>
                        <span className="ml-3 text-xl ">
                            {coin?.market_data.current_price[currency]}
                        </span>
                    </div>
                </div>
            </div>

            <div className="md:w-2/3 w-full px-2 gap-1">

                <div className="flex justify-center items-center gap-2">

                    <h2 className="text-xl">Graph of past</h2>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1">
                            {selectedOption}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#DCA54C] text-black rounded-box w-52">
                            <li><a onClick={() => setSelectedOption('3d')}>3d</a></li>
                            <li><a onClick={() => setSelectedOption('7d')}>7d</a></li>
                            <li><a onClick={() => setSelectedOption('30d')}>30d</a></li>
                        </ul>
                    </div>
                </div>

                <div className="w-full h-full px-3">
                    {historicalData && <LineGraph dataArray={historicalData} currency={currency}/>}
                </div>
            </div>
        </div>
    )
}

export default CoinDetailsPage;