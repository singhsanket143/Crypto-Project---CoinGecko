import parse from "html-react-parser";
import PageLoader from "../components/PageLoader/PageLoader";
import CoinDashboard from "../components/CoinDashboard/CoinDashboard";
import useFetchCoinDetail from "../hooks/useFetchCoinDetail";

function CoinDetailsPage() {
  let { isError, isLoading, coin, currency, coinId } = useFetchCoinDetail();

  if (isLoading) {
    return <PageLoader />;
  }

  if (isError) {
    return <div>Error: Something went wrong</div>;
  }

  console.log(coin);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500">
        <img alt={coin?.name} src={coin?.image?.large} className="h-52 mb-5" />

        <h1 className="text-4xl font-bold mb-5">{coin?.name}</h1>

        <p className="w-full px-6 py-4 text-justify">
          {parse(coin?.description?.en)}
        </p>

        <div className="w-full flex  flex-col md:flex-row md:justify-around">
          <div className="flex items-center mb-4 md:mb-0 justify-center md:justify-start ">
            <h2 className="text-xl font-bold ">Rank</h2>
            <span className="ml-3 text-xl ">{coin?.market_cap_rank}</span>
          </div>

          <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
            <h2 className="text-xl text-yellow-400 font-bold ">
              Current Price
            </h2>
            <span className="ml-3 text-xl ">
              {coin?.market_data.current_price[currency]}
            </span>
          </div>
        </div>
      </div>

      <div className="md:w-2/3 w-full p-3 md:p-6">
        <CoinDashboard
          coinId={coinId}
          currency={currency}
          cardData={{
            marketCap: coin?.market_data.market_cap[currency],
            alh: coin?.market_data.ath[currency],
            atl: coin?.market_data.atl[currency],
            totalVolume: coin?.market_data.total_volume[currency],
            change24h: coin?.market_data.price_change_percentage_24h,
            change1y: coin?.market_data.price_change_percentage_1y,
          }}
        />
      </div>
    </div>
  );
}

export default CoinDetailsPage;
