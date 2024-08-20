import { useState } from 'react';
import currencyStore from '../state/store';
import axiosInstance from '../helpers/axiosInstance';

function useInfiniteScroll (){
    const { currency } = currencyStore();
    const [page, setPage] = useState(2);
    let [tableData, setTableData] = useState([]);
    let [hasMore, setHasMore] = useState(true);

    const fetchMore = () => {
        axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}`)
        .then((res) => {
            setTableData((prevData) => [...prevData, ...res.data]);
            res.data.length > 0 ? setHasMore(true) : setHasMore(false);
        }).catch((err) => {
            console.log(err);
        });
        setPage(page+1);
    };

    return {
        currency,
        page,
        tableData,
        setTableData,
        hasMore,
        fetchMore
    }
}

export default useInfiniteScroll;