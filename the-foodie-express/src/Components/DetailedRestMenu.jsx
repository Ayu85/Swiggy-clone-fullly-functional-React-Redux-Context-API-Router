import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { imageAPI } from '../utils/Constants';
import { FaCircleInfo } from "react-icons/fa6";
import { RiPinDistanceFill } from "react-icons/ri";
import star from "../assets/star2.png"
import DetailedShimmer from './DetailedShimmer';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { CgTimelapse } from "react-icons/cg";
import { TbCoinRupee } from "react-icons/tb";
import ThemeContext from '../utils/themeContext';
import { TbCircleDot } from "react-icons/tb";
import CartContext from '../utils/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import cartSlice, { addItem } from '../utils/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import store from '../utils/store';
const AboutRestaurant = () => {
    const { id } = useParams();
    const [menuData, setMenuData] = useState(null);
    const { theme } = useContext(ThemeContext)
    const { itemDetails } = useContext(CartContext)
    const dark = {
        background: "#18191A",
        transition: "all .2s ease-in"

    }
    const light = {
        background: "white"
    }
    useEffect(() => {
        const getMenu = async () => {
            const rawData = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3176452&lng=82.9739144&restaurantId=${id}&catalog_qa=undefined&query=Sandwich&submitAction=ENTER`)
            const json = await rawData.json();
            setMenuData(json?.data?.cards[0]?.card?.card?.info)
            // console.log(json);
        }

        getMenu()

    }, [])
    return menuData == null ? <DetailedShimmer /> : (
        <div className='flex flex-wrap px-10 py-5 gap-10 rounded-lg items-center justify-between bg-[#282C3F] text-white w-[100%] mt-10'>
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
                <div className='flex mt-5 gap-2 border-slate-500 border w-64 justify-center py-1'>
                    <div className='flex gap-1 items-center'><CgTimelapse className='text-2xl' />{menuData?.sla?.slaString}</div>
                    <div className='flex gap-1 items-center'><TbCoinRupee className='text-2xl' />{menuData?.costForTwoMessage}</div></div>
            </div>

        </div>
    )
}
const MenuCard = ({ name, description, imageId, price }) => {
    const { theme } = useContext(ThemeContext)
    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems);
    // const { itemDetails, setDetails, setFullItem, fullItem } = useContext(CartContext)
    return (

        <>
            <div className='flex flex-wrap gap-10 justify-between  items-center border-b border-slate-200 py-10'>
                <div>
                    <div className='text-xl font-semibold text-slate-600 mt-2' style={theme.mode === "dark" ? { color: "white" } : {}}>{name}</div>
                    <div className='flex items-center' style={theme.mode === "dark" ? { color: "white" } : {}}><LiaRupeeSignSolid />{price / 100}</div>
                    <div className='mt-4 text-slate-500 font-extralightlight' style={theme.mode === "dark" ? { color: "white" } : {}}>{description?.substring(0, 100) || "Taste"}</div>
                </div>
                <div>
                    <img src={imageAPI + imageId} alt="" width={100} className='aspect-square' />
                    <button className='border-slate-300 border px-9 py-1 text-sm text-green-500 font-semibold' onClick={() => {
                        // setDetails({ this was for context api
                        //      price: itemDetails.price + price,
                        //     name: name,
                        //     totalItems: itemDetails.totalItems + 1,
                        // })

                        dispatch(addItem(name))
                        toast.info(`${name} added to cart`, {
                            position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });

                    }}>ADD</button>
                </div>
            </div></>
    )
}
const AllMenu = () => {
    const [menu, setMenu] = useState([])
    const [menu2, setMenu2] = useState([])
    const [menu3, setMenu3] = useState([])
    const [menu4, setMenu4] = useState([])
    const { id } = useParams();
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        const g = async () => {
            const r = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3176452&lng=82.9739144&restaurantId=${id}&catalog_qa=undefined&query=Sandwich&submitAction=ENTER`)
            const s = await r.json();
            setMenu(s?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
            setMenu2(s?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards)
            setMenu3(s?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards)
            setMenu4(s?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7].card?.card?.itemCards)

            console.log("new", s);
        }
        g();
    }, [])
    // console.log(menu);
    return (
        <div className='flex flex-col w-[90%] '>
            <div className='text-slate-700 font-bold text-xl font-sans flex items-center gap-1' style={theme.mode === "dark" ? { color: "white" } : {}}><TbCircleDot />{menu[0]?.card?.info?.category || menu[1]?.card?.info?.category} ({menu.length})</div>
            <div className='flex flex-wrap flex-col gap-5  '>
                {/* <MenuCard  {...menu[0]?.card?.info} /> */
                    menu?.map((items) => {
                        return <MenuCard {...items?.card?.info} />
                    })
                }
            </div>
            <div className='flex flex-wrap flex-col gap-5 mt-9 '>
                <div className='text-xl font-bold text-black font-sans flex items-center gap-1' style={theme.mode === "dark" ? { color: "white" } : {}}><TbCircleDot />{menu2[0]?.card?.info?.category || menu2[1]?.card?.info?.category}({menu2.length})</div>
                {/* <MenuCard  {...menu[0]?.card?.info} /> */
                    menu2?.map((items) => {
                        return <MenuCard {...items?.card?.info} />
                    })
                }
            </div>
            <div className='flex flex-wrap flex-col gap-5 mt-9 '>
                <div className='text-xl font-bold text-black font-sans flex items-center gap-1' style={theme.mode === "dark" ? { color: "white" } : {}}><TbCircleDot />{menu3[1]?.card?.info?.category || menu3[1]?.card?.info?.category}({menu3.length})</div>
                {/* <MenuCard  {...menu[0]?.card?.info} /> */
                    menu3?.map((items) => {
                        return <MenuCard {...items?.card?.info} />
                    })
                }
            </div>
            <div className='flex flex-wrap flex-col gap-5 mt-9 '>
                <div className='text-xl font-bold text-black font-sans flex items-center gap-1' style={theme.mode === "dark" ? { color: "white" } : {}}><TbCircleDot />{menu4[0]?.card?.info?.category || menu4[1]?.card?.info?.category}({menu4.length})</div>
                {/* <MenuCard  {...menu[0]?.card?.info} /> */
                    menu4?.map((items) => {
                        return <MenuCard {...items?.card?.info} />
                    })
                }
            </div>
        </div>
    )
}
const DetailedRestMenu = () => {
    const { theme } = useContext(ThemeContext)
    const dark = {
        background: "#18191A",
        transition: "all .2s ease-in"

    }
    const light = {
        background: "white",
        transition: "all .2s ease-in"
    }
    return (
        <div style={theme.mode === "dark" ? dark : light}><div className='flex justify-center pt-5 flex-wrap gap-8 w-[80%] ml-[50%] -translate-x-[50%]'>
            <AboutRestaurant />
            <AllMenu />

        </div></div>
    )
}

export default DetailedRestMenu
