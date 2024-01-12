import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../utils/CartContext'
import { imageAPI } from '../utils/Constants'
import { useSelector } from 'react-redux'
import { FaIndianRupeeSign } from "react-icons/fa6";
import ThemeContext from '../utils/themeContext';
const CartItemCard = ({ name, price, imageId }) => {

    return <div className='flex flex-wrap gap-3 justify-between min-w-full px-5 m-2 items-center'>
        <div className='flex flex-wrap flex-col'>
            <h1 className='text-lg w-[200px]'>{name}</h1>
            <h1 className='font-bold flex flex-wrap items-center '><FaIndianRupeeSign />{price / 100} </h1>
        </div>
        <img src={imageAPI + imageId} alt="" className='w-20 aspect-square rounded-lg' />
    </div>
}
const CartPage = () => {
    // const { itemDetails ,fullItem} = useContext(CartContext)
    const cartItemsArray = useSelector(store => store.cart.items)
    const restaurantName = useSelector(store => store.cart.restName)
    // console.log(restaurantName[0].rLogo);
    const [items, setItems] = useState([])
    let [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setItems(cartItemsArray)
    }, [cartItemsArray])

    
        // for (let index = 0; index < items.length; index++) {
        //     setTotalPrice(totalPrice += items[index].price)
        // }
  

    console.log(items);
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
        <div style={theme.mode === "dark" ? dark : light} className='flex flex-col  items-center py-16 mt-10 border-slate-200 border w-[400px] ml-[50%] -translate-x-[50%]'>

            <div className='flex items-center gap-3 mb-5'>
                <img src={imageAPI + restaurantName[0].rLogo} alt="" width={100} className='rounded-lg' />
                {restaurantName[0].rName}
            </div>
            {items.map((foods) => {
                return <CartItemCard {...foods} />
            })}
            <div className='text-lg font-semibold'>Total Items: {cartItemsArray.length}</div>

        </div>
    )
}

export default CartPage
