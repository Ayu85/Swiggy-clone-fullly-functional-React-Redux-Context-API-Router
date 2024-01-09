import React, { useContext } from 'react'
import star from "../assets/star.png"
import { imageAPI } from '../utils/Constants'
import ThemeContext from '../utils/themeContext'
import { SlLocationPin } from "react-icons/sl";
const Card = ({ name, areaName, avgRating, sla, cuisines, cloudinaryImageId, aggregatedDiscountInfoV3 }) => {
    const { theme } = useContext(ThemeContext)
    const dark = {
        background: "#3A3B3C",
        transition: "all .2s ease-in"
    }
    const light = {
        background: "white",
        transition: "all .2s ease-in"
    }
    return (
        <div className=' w-[250px] h-[300px]  flex flex-col hover:scale-[1.1] transition-all px-3 py-3 rounded-xl ' style={theme.mode === "dark" ? dark : light}>
            <div className='relative' >
                <img src={imageAPI + cloudinaryImageId} alt="" className='w-[230px] h-48 rounded-2xl absolute' />
                <h2 className='absolute bg-[#00000090] text-white px-3 py-2 rounded-2xl'>{aggregatedDiscountInfoV3.discountTag + aggregatedDiscountInfoV3.subHeader}</h2>
            </div>
            <h1 className='text-lg font-bold tracking-wide text-[#414449] name mt-48 ml-3' style={theme.mode === "dark" ? { color: "#E4E6EB" } : { color: "#414449" }}>{name}</h1>
            <div className='flex gap-2 font-semibold items-center text-[#414449] ml-3 text-base ' style={theme.mode === "dark" ? { color: "#B0B3B8" } : { color: "#414449" }}>
                <h3 className='flex h-5 gap-1  items-center '><img src={star} alt="" className='w-5' style={theme.mode === "dark" ? { color: "#B0B3B8" } : { color: "#414449" }} />{avgRating} ▪️</h3>
                <h3>{sla?.deliveryTime} MINS</h3>
            </div>
            <h4 className='w-[200px] overflow-hidden ml-3' style={theme.mode === "dark" ? { color: "#B0B3B8" } : { color: "#414449" }}>{cuisines?.join(",")}</h4>
            <h5 className='ml-3 flex items-center gap-1' style={theme.mode === "dark" ? { color: "#B0B3B8" } : { color: "#414449" }}>{areaName}<SlLocationPin /></h5>
        </div>
    )
}

export default Card
