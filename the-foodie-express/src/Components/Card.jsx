import React from 'react'
import star from "../assets/star.png"
import { imageAPI } from '../utils/Constants'
const Card = ({ name, areaName, avgRating, sla, cuisines, cloudinaryImageId, avgRatingString }) => {
    return (
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
    )
}

export default Card
