import { useQuery } from "react-query";
import { fetchCoinDetails } from "../services/fetchCoinDetails";
import currencyStore from "../state/store";

function useFetchTwoCoinData (coinIDs){
  const { currency } = currencyStore();

    const {
        isLoading: isCoin1Loading,
        isError: isCoin1Error,
        data: coin1Data,
      } = useQuery(
        ["coin", coinIDs[0], currency],
        () => fetchCoinDetails(coinIDs[0]),
        {
          cacheTime: 1000 * 60,
          staleTime: 1000 * 60 * 2,
        }
      );
    
      const {
        isLoading: isCoin2Loading,
        isError: isCoin2Error,
        data: coin2Data,
      } = useQuery(
        ["coin", coinIDs[1], currency],
        () => fetchCoinDetails(coinIDs[1]),
        {
          cacheTime: 1000 * 60,
          staleTime: 1000 * 60 * 2,
        }
      );

    return {
        isCoin1Error,
        isCoin1Loading,
        isCoin2Error,
        isCoin2Loading,
        coin1Data,
        coin2Data,
        currency
    }
}

export default useFetchTwoCoinData;