import React from 'react'
import { useNavigate } from 'react-router-dom';


const data  = {
      id: "dogecoin",
      name: "Dogecoin",
      api_symbol: "dogecoin",
      symbol: "DOGE",
      market_cap_rank: 10,
      thumb: "https://coin-images.coingecko.com/coins/images/5/thumb/dogecoin.png",
      large: "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png"
    }



function SearhItem({coinData = data, setSearchText, compareItem = false, deleteCoinFn}) {

    const navigate = useNavigate();


    function handleCoinRedirect(id) {
      if (compareItem){
        return;
      }
      setSearchText("");
        navigate(`/details/${id}`);
    }

  return (
    <li className=' w-full' onClick={() => handleCoinRedirect(coinData.id)}>
        <a className='h-12 flex items-center justify-between'>
            <img src={coinData.thumb} className='h-8' alt={coinData.name} />
            <p className='font-semibold'>{coinData.name} - <span className='font-thin'>{coinData.symbol}</span></p>
            <p className='text-yellow-500'>👑{coinData.market_cap_rank}</p>
            {compareItem && <button className="btn btn-square btn-sm" onClick={() => deleteCoinFn(coinData.id)}>🗑️</button>}
        </a>
    </li>
  )
}

export default SearhItem
