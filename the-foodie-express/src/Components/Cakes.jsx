import React, { useEffect, useState } from 'react'
import { imageAPI } from '../utils/Constants'
import star from "../assets/star.png"
import Shimmer from './Shimmer'
import { pizzaAPI } from '../utils/Constants'
import { mockCakeData } from '../utils/mockData'
import { Link } from 'react-router-dom'
const CakeCard = ({ name, areaName, avgRating, sla, cuisines, cloudinaryImageId, avgRatingString }) => {
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
const Cake = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(mockCakeData)
    }, [])

    return data.length === 0 ? <Shimmer /> : (
        <div className='mt-10 flex flex-wrap flex-col  justify-center w-[85%] ml-[55%] -translate-x-[50%]'>
            <h1 className='text-5xl font-bold tracking-wide font-sans text-slate-700 '>Cakes</h1>
            <p className='text-xl text-slate-500 font-semibold tracking-wide mt-2'>Feast on amazing cakes to satisfy your sweet tooth.</p>
            <p className='text-2xl  font-semibold tracking-wide mt-6 text-slate-700'>Restaurants to explore</p>

            <div className='flex flex-wrap gap-5  mt-5'>
            {
                    data?.map((restaurants) => {
                        return <Link to={"/restaurant/" + restaurants?.card?.card?.info?.id}><CakeCard {...restaurants?.card?.card?.info} /></Link>
                    })
                }
                
            </div>
        </div>
    )
}

export default Cake;
