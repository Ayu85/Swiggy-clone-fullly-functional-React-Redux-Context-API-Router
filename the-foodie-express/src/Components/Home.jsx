import React, { useEffect, useState } from 'react'
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
const Home = ({ dark }) => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("")


    useEffect(() => {
        const getDataAPI = async () => {
            const rawData = await fetch(API)
            const data = await rawData.json();
            console.log(data);
            setRestaurantData(data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredData(data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        getDataAPI();
    }, [])
    function getFilteredData(searchText) {
        const data = restaurantData.filter((items) => {
            return items?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase());
        })
        return data;
    }
    // console.log(restaurantData);
    // console.log("fil", filteredData);
    // if (filteredData.length == 0)
    //     return <Error />
    return filteredData?.length === 0 ? <Shimmer /> : (
        <>
            <><div className=' justify-center mt-10  mx-16 hidden md:flex '>
                <input type="text" className='border-[#de9c37] border w-[550px] h-10 rounded-l-xl pl-2 text-[#2d2e32] focus:outline-none transition-all focus-within:bg-[#de9b3716]'
                    onChange={(e) => {
                        setSearchText(e.target.value)
                        setFilteredData(getFilteredData(searchText));

                    }} style={dark === true ? { background: "#c6bacd", border: " 1px solid black" } : { background: "white" }} />
                <button className='bg-[#de9c37] text-white w-24 h-10 rounded-r-xl' onClick={() => {
                    const d = getFilteredData(searchText);
                    setFilteredData(d);
                    console.log(d);
                }} >Search</button>
            </div></>
            <div className='flex flex-wrap justify-center gap-5 mt-10'>
                <Link to={"/pizza"}> <img src={pizza} width={130} alt="pizza" /></Link>
                <Link to={"/burger"}> <img src={burger} width={130} alt="pizza" /></Link>
                <Link to={"/cake"} > <img src={cake} width={130} alt="cake" /></Link>
                <img src={Sandwich} width={130} alt="pizza" />
                <img src={dosa} width={130} alt="pizza" />
                <img src={biryani} width={130} alt="pizza" />
            </div>
            <h2 className='font-bold  text-2xl w-[80%] ml-[50%] -translate-x-[46%] mt-16 name'>Restaurants with online food delivery in Varanasi</h2>
            <div className='flex justify-center mt-5 flex-wrap gap-8 w-[80%] ml-[50%] -translate-x-[50%]'>
                {/* <Card {...restaurantData[2]?.info} /> */}
                {
                    filteredData?.map((restaurants) => {
                        return <Card {...restaurants.info} />
                    })
                }
            </div></>
    )
}

export default Home
