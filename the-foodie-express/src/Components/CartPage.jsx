import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../utils/CartContext'
import { imageAPI } from '../utils/Constants'
import { useSelector } from 'react-redux'

const CartItemCard = ({ name, price,imageId }) => {
    return <div>
        <h1>{name}</h1>
        <h1>{price/100}</h1>
        <img src={imageAPI+imageId} alt="" />
    </div>
}
const CartPage = () => {
    // const { itemDetails ,fullItem} = useContext(CartContext)
    const cartItemsArray = useSelector(store => store.cart.items)
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(cartItemsArray)
    }, [cartItemsArray])
    console.log(items);
    return (
        <div>
            {/* <h1>Cart Page</h1>
            <h1>{itemDetails.name}</h1>
            <h2>{itemDetails.price / 100}</h2>
            <h2>{itemDetails.totalItems}</h2> */}
            {items.map((foods) => {
                return <CartItemCard {...foods} />
            })}
        </div>
    )
}

export default CartPage
