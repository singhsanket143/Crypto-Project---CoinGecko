import currencyStore from '../state/store';
import { useInfiniteQuery } from 'react-query';
import { fetchCoinData } from '../services/fetchCoinData';

function useInfiniteScroll() {
    const { currency } = currencyStore();
    
    const fetchCoins = async ({ pageParam = 1 }) => {
        const response = await fetchCoinData(pageParam, currency);
        return response;
    };

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
        ['coins', currency],
        fetchCoins,
        {
            getNextPageParam: (lastPage, pages) => {
                if (lastPage.length === 0) return undefined; // No more pages
                return pages.length + 1; // Increment page number
            },
            cacheTime: 1000 * 60 * 2,
            staleTime: 1000 * 60 * 2,
            retry: 2,
            retryDelay: 1000,
        }
    );

    const tableData = data ? data.pages.flat() : [];
    const hasMore = hasNextPage || isFetchingNextPage;

    return {
        currency,
        tableData,
        hasMore,
        fetchMore: fetchNextPage,
        isFetchingNextPage,
    };
}

export default useInfiniteScroll;
