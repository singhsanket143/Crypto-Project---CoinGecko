import { useState } from "react";
import useDebounce from "./useDebounce";
import { useQuery } from "react-query";
import { fetchSearchData } from "../services/fetchSearchData";

 
function useFetchSearchData (){
    let [searchText, setSearchText] = useState("");
    let debounceValue = useDebounce(searchText, 1000);
    const {data, isError, isLoading, error} = useQuery(["searchData", debounceValue], () => fetchSearchData(searchText), {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    })

    return {
        searchText, 
        setSearchText,
        data,
        isError,
        isLoading,
        error
    }
}

export default useFetchSearchData;