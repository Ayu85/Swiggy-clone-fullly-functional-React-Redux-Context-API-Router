import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../utils/CartContext'
import { imageAPI } from '../utils/Constants'
import { useSelector } from 'react-redux'
import { FaIndianRupeeSign } from "react-icons/fa6";
const CartItemCard = ({ name, price, imageId }) => {
    return <div className='flex flex-wrap gap-32 justify-between max-w-full px-5 m-2 items-center'>
        <div className='flex flex-wrap flex-col'>
            <h1 className='text-lg'>{name}</h1>
            <h1 className='font-bold flex flex-wrap items-center '><FaIndianRupeeSign />{price / 100}</h1>
        </div>
        <img src={imageAPI + imageId} alt="" className='w-20 aspect-square rounded-lg' />
    </div>
}
const CartPage = () => {
    // const { itemDetails ,fullItem} = useContext(CartContext)
    const cartItemsArray = useSelector(store => store.cart.items)
    const restaurantName = useSelector(store => store.cart.restName)
    console.log(restaurantName[0].rLogo);
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(cartItemsArray)
    }, [cartItemsArray])
    console.log(items);
    return (
        <div className='flex flex-col  items-center py-16 mt-10 border-slate-200 border w-[500px] ml-[50%] -translate-x-[50%]'>
            
            <div className='flex items-center gap-3'>
                <img src={imageAPI + restaurantName[0].rLogo} alt="" width={100} className='rounded-lg' />
                {restaurantName[0].rName}
            </div>
            {items.map((foods) => {
                return <CartItemCard {...foods} />
            })}
        </div>
    )
}

export default CartPage
