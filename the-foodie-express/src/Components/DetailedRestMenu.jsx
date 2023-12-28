import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { imageAPI } from '../utils/Constants';
import { FaCircleInfo } from "react-icons/fa6";
import { RiPinDistanceFill } from "react-icons/ri";
import star from "../assets/star2.png"
const AboutRestaurant = () => {
    const { id } = useParams();
    const [menuData, setMenuData] = useState();
    useEffect(() => {
        const getMenu = async () => {
            const rawData = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3176452&lng=82.9739144&restaurantId=${id}&catalog_qa=undefined&query=Sandwich&submitAction=ENTER`)
            const json = await rawData.json();
            setMenuData(json?.data?.cards[0]?.card?.card?.info)
            console.log(json);
        }
        getMenu()
    })
    return (
        <div className='flex gap-96 items-center'>
            <div className='flex justify-center gap-2 flex-col items-center'>            <img src={imageAPI + menuData?.cloudinaryImageId} alt="" width={200} className='rounded-lg aspect-square' />
                <div className='flex items-center gap-1'> <img src={star} width={18} alt="" />
                    <div className='text-[#3BA73E] font-semibold tracking-wide text-sm'>{menuData?.totalRatingsString}</div></div>
            </div>
            <div >
                <div className='text-xl font-semibold text-[#282C3F]'>{menuData?.name}
                </div>
                <div>{menuData?.cuisines?.join(' , ')}</div>
                <div className='flex items-center gap-1'>{menuData?.areaName} , {menuData?.sla?.lastMileTravelString}<RiPinDistanceFill /></div>
                <div className='mt-5 flex items-center gap-2'><FaCircleInfo />" {menuData?.feeDetails?.message}  "</div>

            </div>

        </div>
    )
}
const DetailedRestMenu = () => {
    return (
        <div className='flex justify-center mt-5 flex-wrap gap-8 w-[80%] ml-[50%] -translate-x-[50%]'>
            <AboutRestaurant />
        </div>
    )
}

export default DetailedRestMenu
