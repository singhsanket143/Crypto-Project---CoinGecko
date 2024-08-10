import { useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "react-query";

function CoinTable() {
    const [coinsList,setCoinsList] = useState([])
    const [page, setPage] = useState(1);
    // this is for our scroll effect should run only once
    const [stop,setStop] = useState(false)
    const { data, isLoading, isError, error} = useQuery(['coins', page], () => fetchCoinData(page, 'usd'), {
        // retry: 2,
        // retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
        // without this i think we can not access previous data
        keepPreviousData:true,
        onSuccess: () => setStop(false)
    });
    
    if(isError) {
        return <div>Error: {error.message}</div>;
    }
   useEffect(()=> {
    if (data) {
        setCoinsList((preData)=> [...preData,...data]) 
    }
   },[data])

    // console.log(data)
    console.log(coinsList)
    useEffect(()=>{
        const scrollEffect = ()=>{
            const userScrolled = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullPageHeight =  document.documentElement.scrollHeight;
            // console.log(userScrolled,windowHeight,fullPageHeight)
            if(userScrolled + windowHeight > fullPageHeight - 500 && !stop  ){
                 setPage((prePage) => prePage + 1);
                 setStop(true)
            }
        };
        window.addEventListener("scroll",scrollEffect);
        return () => window.removeEventListener("scroll",scrollEffect);   
    },[stop])

    return (
        <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
            <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
                {/* Header of the table */}
                <div className="basis-[35%]">
                    Coin 
                </div>
                <div  className="basis-[25%]">
                    Price 
                </div>
                <div  className="basis-[20%]">
                    24h change 
                </div>
                <div  className="basis-[20%]">
                    Market Cap
                </div>
            </div>

            <div className="flex flex-col w-[80vw] mx-auto">
                {isLoading && <div>Loading...</div>}
                {coinsList && coinsList.map((coin) => {
                    return (
                        <div key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between">
                            <div className="flex items-center justify-start gap-3 basis-[35%]">

                                <div className="w-[5rem] h-[5rem]">
                                    <img src={coin.image} className="w-full h-full" />
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
            </div>

            {/* <div className="flex gap-4 justify-center items-center">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page-1)} 
                    className="btn btn-primary btn-wide text-white text-2xl"
                >
                    Prev
                </button>
                <button 
                    onClick={() => setPage(page+1)} 
                    className="btn btn-secondary btn-wide text-white text-2xl"
                >
                    Next
                </button>
            </div> */}
        </div>
    )
}

export default CoinTable;