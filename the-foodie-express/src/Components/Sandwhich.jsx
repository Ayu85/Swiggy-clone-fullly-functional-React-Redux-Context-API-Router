import React from 'react'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { imageAPI } from '../utils/Constants'
import star from "../assets/star.png"

import { mockSandwichData } from '../utils/mockData'
const SandwichCard = ({ name, areaName, avgRating, sla, cuisines, cloudinaryImageId, avgRatingString }) => {
    return (
        <div>
            <div className='w-[250px] aspect-square  flex flex-col hover:scale-[1.02] transition-all'>
                <div>
                    <img src={imageAPI + cloudinaryImageId} alt="" className='w-[230px] h-48 rounded-2xl' />
                </div>
                <h1 className='text-lg font-bold tracking-wide text-[#414449] name mt-2 ml-3'>{name}</h1>
                <div className='flex gap-2 font-semibold items-center text-[#414449] ml-3 text-base'>
                    <h3 className='flex h-5 gap-1  items-center '><img src={star} alt="" className='w-5' />{avgRating} ▪️</h3>
                    <h3>{sla?.deliveryTime} MINS</h3>
                </div>
                <h4 className='w-[200px] overflow-hidden ml-3'>{cuisines?.join(",")}</h4>
                <h5 className='ml-3'>{areaName}</h5>
            </div>
        </div>
    )
}
const Sandwich = () => {
    const [data, setData] = useState(mockSandwichData)
    const [filteredData, setFilteredData] = useState(mockSandwichData)
    const [isTopRated, setTopRated] = useState(true)
    useEffect(() => {
        setData(mockSandwichData)
        setFilteredData(mockSandwichData)
        // setTopRated(false)
    }, [])
    const filterBurger = () => {
        return data.filter((d) => {
            return d?.card?.card?.info?.avgRating > 4.1
        })
    }
    return data.length === 0 ? <Shimmer /> : (
        <div className='mt-10 flex flex-wrap flex-col  justify-start w-[85%] ml-[55%] -translate-x-[50%]'>
            <h1 className='text-5xl font-bold tracking-wide font-sans text-slate-700 '>Sandwich</h1>
            <p className='text-xl text-slate-500 font-semibold tracking-wide mt-2'>Bring home fresh and filling sandwiches to munch on.</p>
            <div onClick={() => {
                if (isTopRated === true) {
                    setTopRated(false)
                    const x = filterBurger();
                    setFilteredData(x)
                }
                else {
                    setTopRated(true)
                    setFilteredData(data)
                }

            }} style={(isTopRated == false) ? { border: "1px solid gray", backgroundColor: "#334155", color: "white " } : { border: "1px solid green" }} className='bg-slate-50 w-32 px-2 flex items-center gap-1 cursor-pointer hover:bg-slate-200 hover:border-slate-600 transition-all justify-center py-2 mt-5 rounded-full text-base  border  '>
                Top Rated <img src={star} className='w-5 h-5' alt="" /></div>
            <p className='text-2xl  font-semibold tracking-wide mt-6 text-slate-700'>Restaurants to explore</p>
            <div className='flex flex-wrap gap-5  mt-5'>
                {
                    // <PizzaCard {...slicedData[0]?.card?.card?.info} />
                    filteredData?.map((items) => {
                        return <SandwichCard {...items?.card?.card?.info} />
                    })
                }
            </div>
        </div >
    )

}

export default Sandwich
