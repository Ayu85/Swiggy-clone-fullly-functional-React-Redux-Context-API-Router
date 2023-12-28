import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { imageAPI } from '../utils/Constants';
import { FaCircleInfo } from "react-icons/fa6";
import { RiPinDistanceFill } from "react-icons/ri";
import star from "../assets/star2.png"
import DetailedShimmer from './DetailedShimmer';
import { LiaRupeeSignSolid } from "react-icons/lia";
const AboutRestaurant = () => {
    const { id } = useParams();
    const [menuData, setMenuData] = useState(null);
    useEffect(() => {
        const getMenu = async () => {
            const rawData = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3176452&lng=82.9739144&restaurantId=${id}&catalog_qa=undefined&query=Sandwich&submitAction=ENTER`)
            const json = await rawData.json();
            setMenuData(json?.data?.cards[0]?.card?.card?.info)
            console.log(json);
        }

        getMenu()

    }, [])
    return menuData == null ? <DetailedShimmer /> : (
        <div className='flex flex-wrap px-10 py-3 items-center justify-between bg-[#282C3F] text-white w-[100%] mt-10'>
            <div className='flex justify-center gap-2 flex-col items-center mt-10  '>
                <img src={imageAPI + menuData?.cloudinaryImageId} alt="" width={200} className=' rounded-lg aspect-square' />
                <div className='flex flex-col justify-center items-center border-slate-300 border px-2 gap-1 mt-3'>
                    <div className='flex gap-1 h-5 items-center text-[#3BA73E] font-bold tracking-wide text-sm'> <img src={star} width={18} alt="" />{menuData?.avgRatingString}</div>
                    <div className='flex items-center gap-1'>
                        <div className='text-[#3BA73E] font-semibold tracking-wide text-sm border-t  border-slate-300'>{menuData?.totalRatingsString}</div></div>
                </div>
            </div>
            <div >
                <div className='text-3xl tracking-wide font-semibold text-white'>{menuData?.name}
                </div>
                <div>{menuData?.cuisines?.join(' , ')}</div>
                <div className='flex items-center gap-1'>{menuData?.areaName} , {menuData?.sla?.lastMileTravelString}<RiPinDistanceFill /></div>
                <div className='mt-5 flex items-center gap-2'><FaCircleInfo />" {menuData?.feeDetails?.message}  "</div>

            </div>

        </div>
    )
}
const MenuCard = ({ name, description, imageId, defaultPrice }) => {
    return (

        <>
            <div className='flex flex-wrap gap-4 justify-between w-[100%] items-center border-b border-slate-200 py-10'>
                <div>
                    <div className='text-xl font-semibold text-slate-600 mt-2'>{name}</div>
                    <div className='flex items-center'><LiaRupeeSignSolid />{defaultPrice?.toString()?.substring(0, 3)}</div>
                    <div className='mt-4 text-slate-500 font-extralightlight'>{description?.substring(0,50)}</div>
                </div>
                <div><img src={imageAPI + imageId} alt="" width={100} className='aspect-square' /></div>
            </div></>
    )
}
const AllMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        const g = async () => {
            const r = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3176452&lng=82.9739144&restaurantId=435680&catalog_qa=undefined&submitAction=ENTER")
            const s = await r.json();
            setMenu(s?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
            console.log("new", s);
        }
        g();
    }, [])
    console.log(menu);
    return (
        <div className='flex flex-col '>
            <div className='text-slate-700 font-bold text-xl font-sans'>Recommended(20)</div>
            <div className='flex flex-wrap flex-col gap-5  '>
                {/* <MenuCard  {...menu[0]?.card?.info} /> */
                    menu.map((items) => {
                        return <MenuCard {...items?.card?.info} />
                    })
                }
            </div>
        </div>
    )
}
const DetailedRestMenu = () => {
    return (
        <div className='flex justify-center mt-5 flex-wrap gap-8 w-[80%] ml-[50%] -translate-x-[50%]'>
            <AboutRestaurant />
            <AllMenu />

        </div>
    )
}

export default DetailedRestMenu
