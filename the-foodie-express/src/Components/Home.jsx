import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { API } from '../utils/Constants'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'
import Error from './Error'
import pizza from "../assets/Pizza.webp"
import burger from "../assets/Burger.webp"
import cake from "../assets/Cakes.webp"
import chinese from "../assets/Chinese.webp"
import dosa from "../assets/Dosa.webp"
import biryani from "../assets/Biryani_2.webp"
import Sandwich from "../assets/Sandwich.avif"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ThemeContext from '../utils/themeContext'
import { moreRestaurantsData } from '../utils/mockData'
const Home = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [moreRestaurants, setMoreRestaurants] = useState([]);
    const [filteredMoreRest, setFilteredMoreRest] = useState()
    const [searchText, setSearchText] = useState("")
    const [isTopRatedClicked, setIsTopRatedClicked] = useState(false)
    const { theme } = useContext(ThemeContext)


    const dark = {
        background: "#18191A",
        transition: "all .2s ease-in"

    }
    const light = {
        background: "white",
        transition: "all .2s ease-in"
    }

    useEffect(() => {
        const getDataAPI = async () => {
            const rawData = await fetch(API)
            const data = await rawData.json();
            console.log(data);
            setRestaurantData(data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredData(data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setMoreRestaurants(moreRestaurantsData[0]?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredMoreRest(moreRestaurantsData[0]?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        getDataAPI();
    }, [])
    // console.log(moreRestaurants);
    function getFilteredData(searchText) {
        const data = restaurantData.filter((items) => {
            return items?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase());
        })
        return data;
    }
    const filteredMoreRestFunction = () => {
        return moreRestaurants.filter((rest) => {
            return rest?.info?.avgRating > 4
        })
    }

    return filteredData?.length === 0 ? <Shimmer /> : (
        <div style={theme.mode === "dark" ? dark : light}>
            <div><div className=' justify-center pt-10  mx-16 hidden md:flex '>
                <input type="text" style={theme.mode === "dark" ? dark : light} placeholder='Search taste near you' className='border-[#de9c37] border w-[550px] h-10  pl-2 text-[#2d2e32] focus:outline-none transition-all focus-within:bg-[#de9b3716]'
                    onChange={(e) => {
                        setSearchText(e.target.value)
                        setFilteredData(getFilteredData(searchText));

                    }} />
                <button className='bg-[#de9c37] text-white w-24 h-10 ' onClick={() => {
                    const d = getFilteredData(searchText);
                    setFilteredData(d);

                }} >Search</button>
            </div></div>
            <div className='flex flex-wrap justify-center gap-5 pt-10 '>
                <Link to={"/pizza"}> <img src={pizza} width={130} alt="pizza" /></Link>
                <Link to={"/burger"}> <img src={burger} width={130} alt="pizza" /></Link>
                <Link to={"/cake"} > <img src={cake} width={130} alt="cake" /></Link>
                <Link to={"/sandwich"} > <img src={Sandwich} width={130} alt="cake" /></Link>
                <img src={dosa} width={130} alt="pizza" />
                <img src={biryani} width={130} alt="pizza" />
            </div>
            <div className='border-b border justify-center border-slate-200 w-[75%] ml-[50%] -translate-x-[50%] mt-5'></div>
            <h2 className='font-bold  text-2xl w-[80%] ml-[50%] -translate-x-[46%] mt-16 name'>Top Restaurant Chains in Varanasi</h2>
            <div className='flex justify-center mt-6 flex-wrap gap-8 w-[80%] ml-[50%] -translate-x-[50%]'>
                {/* <Card {...restaurantData[2]?.info} /> */}
                {
                    filteredData?.map((restaurants) => {
                        return <Link to={"/restaurant/" + restaurants?.info?.id}><Card {...restaurants?.info} /></Link>
                    })
                }
            </div>
            <h2 className='font-bold  text-2xl w-[80%] ml-[50%] -translate-x-[46%] mt-16 name'>Restaurants with online food delivery in Varanasi</h2>
            <div className='font-bold  w-[80%] ml-[50%] -translate-x-[46%] '>
                <button className='border-slate-300 border rounded-full py-2 px-3
                 m-2 ml-2 mr-2 text-sm text-zinc-600'>Fast Delivery</button>
                <button className='border-slate-300 border rounded-full py-2 px-3
                 m-2 ml-2 mr-2  text-sm text-zinc-600' style={isTopRatedClicked === true ? { border: "1px solid black" } : {}} onClick={() => {
                        if (isTopRatedClicked === false) {
                            setIsTopRatedClicked(true)
                            const temp = filteredMoreRestFunction();
                            setFilteredMoreRest(temp)
                        }
                        else {
                            setIsTopRatedClicked(false)
                            setFilteredMoreRest(moreRestaurantsData[0]?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                        }

                    }}>Top Rated(4+)</button>

            </div>
            <div className='flex justify-center mt-6 flex-wrap gap-8 w-[80%] ml-[50%] -translate-x-[50%]'>
                {/* <Card {...restaurantData[2]?.info} /> */}
                {
                    filteredMoreRest?.map((restaurants) => {
                        return <Link to={"/restaurant/" + restaurants?.info?.id}><Card {...restaurants?.info} /></Link>
                    })
                }
            </div>
        </div>
    )
}

export default Home
