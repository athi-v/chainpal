import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { FiArrowUp, FiArrowDown } from 'react-icons/fi'
import './Featured.css'

const Featured = () => {
  const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=15&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    if (!data) return null

  return (
    <div className='featured'>
    <div className='container'>
        {/* Left */}
        <div className='left'>
            <h1>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h1>
            <p>See all available assets: Cryptocurrencies and NFT's</p>
            <button className='btn btn-primary'>See More Coins</button>
        </div>

        {/* Right */}

        <div className='right'>
            <div className='card'>
                <div className='top'>
                    {/* <img src={BTC} alt='/' /> */}
                    <img src={data[0].image} alt='' />
                </div>
                <div>
                    <h5>{data[0].name}</h5>
                    <p>R{data[0].current_price.toLocaleString()}</p>
                </div>

                {data[0].price_change_percentage_24h < 0 ? (
                    <span className='red'>
                        <FiArrowDown className='icon' />
                        {data[0].price_change_percentage_24h.toFixed(2)}%
                    </span>
                ) : (
                        <span className='green'>
                            <FiArrowUp className='icon' />
                            {data[0].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
            </div>
            <div className='card'>
                <div className='top'>
                    <img src={data[1].image} alt='' />
                </div>
                <div>
                    <h5>{data[1].name}</h5>
                    <p>R{data[1].current_price.toLocaleString()}</p>
                </div>

                {data[1].price_change_percentage_24h < 0 ? (
                    <span className='red'>
                        <FiArrowDown className='icon' />
                        {data[1].price_change_percentage_24h.toFixed(2)}%
                    </span>
                ) : (
                        <span className='green'>
                            <FiArrowUp className='icon' />
                            {data[1].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
            </div>
            <div className='card'>
                <div className='top'>
                    <img src={data[7].image} alt='' />
                </div>
                <div>
                    <h5>{data[7].name}</h5>
                    <p>R{data[7].current_price.toLocaleString()}</p>
                </div>

                {data[7].price_change_percentage_24h < 0 ? (
                    <span className='red'>
                        <FiArrowDown className='icon' />
                        {data[7].price_change_percentage_24h.toFixed(2)}%
                    </span>
                ) : (
                        <span className='green'>
                            <FiArrowUp className='icon' />
                            {data[7].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
            </div>
            <div className='card'>
                <div className='top'>
                    <img src={data[11].image} alt='' />
                </div>
                <div>
                    <h5>{data[11].name}</h5>
                    <p>R{data[11].current_price.toLocaleString()}</p>
                </div>

                {data[11].price_change_percentage_24h < 0 ? (
                    <span className='red'>
                        <FiArrowDown className='icon' />
                        {data[11].price_change_percentage_24h.toFixed(2)}%
                    </span>
                ) : (
                        <span className='green'>
                            <FiArrowUp className='icon' />
                            {data[11].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
            </div>
            <div className='card'>
                <div className='top'>
                    <img src={data[12].image} alt='' />
                </div>
                <div>
                    <h5>{data[12].name}</h5>
                    <p>R{data[12].current_price.toLocaleString()}</p>
                </div>

                {data[12].price_change_percentage_24h < 0 ? (
                    <span className='red'>
                        <FiArrowDown className='icon' />
                        {data[12].price_change_percentage_24h.toFixed(2)}%
                    </span>
                ) : (
                        <span className='green'>
                            <FiArrowUp className='icon' />
                            {data[12].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
            </div>
            <div className='card'>
                <div className='top'>
                    <img src={data[2].image} alt='' />
                </div>
                <div>
                    <h5>{data[2].name}</h5>
                    <p>R{data[2].current_price.toLocaleString()}</p>
                </div>

                {data[2].price_change_percentage_24h < 0 ? (
                    <span className='red'>
                        <FiArrowDown className='icon' />
                        {data[2].price_change_percentage_24h.toFixed(2)}%
                    </span>
                ) : (
                        <span className='green'>
                            <FiArrowUp className='icon' />
                            {data[2].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
            </div>
        </div>
    </div>

</div>


  )
}

export default Featured;
