import { useState } from "react";
import { useQuery } from "react-query";
import { fetchCoinData } from "../services/fetchCoinData";
import currencyStore from "../state/store"

function useFetchCoinTableData (){

    const { currency } = currencyStore();

    const [page, setPage] = useState(1);
    const { data, isLoading, isError, error} = useQuery(['coins', page, currency], () => fetchCoinData(page, currency), {
        // retry: 2,
        // retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    return {
        page,
        setPage,
        data,
        isLoading,
        isError,
        error
    }

}

export default useFetchCoinTableData;