import currencyStore from "../state/store";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinDetails } from "../services/fetchCoinDetails";

function useFetchCoinDetail() {
  const { coinId } = useParams();
  const { currency } = currencyStore();

  const {
    isError,
    isLoading,
    data: coin,
  } = useQuery(["coin", coinId], () => fetchCoinDetails(coinId), {
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  return {
    isError,
    isLoading,
    coin,
    currency,
    coinId
  }
}

export default useFetchCoinDetail;