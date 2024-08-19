import React from 'react'


const data  = {
      id: "dogecoin",
      name: "Dogecoin",
      api_symbol: "dogecoin",
      symbol: "DOGE",
      market_cap_rank: 10,
      thumb: "https://coin-images.coingecko.com/coins/images/5/thumb/dogecoin.png",
      large: "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png"
    }



function SearhItem({coinData = data, key}) {
  return (
    <li className='mb-2' key={key}>
        <a className='h-12 flex items-center justify-between'>
            <img src={coinData.thumb} alt={coinData.name} />
            <p className='font-semibold'>{coinData.name} - <span className='font-thin'>{coinData.symbol}</span></p>
            <p className='text-yellow-500'>👑{coinData.market_cap_rank}</p>
        </a>
    </li>
  )
}

export default SearhItem
