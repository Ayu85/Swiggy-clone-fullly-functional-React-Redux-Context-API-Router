import React, { useContext } from 'react'
import CartContext from '../utils/CartContext'

const CartPage = () => {
    const { itemDetails ,fullItem} = useContext(CartContext)
    return (
        <div>
            <h1>Cart Page</h1>
            <h1>{itemDetails.name}</h1>
            <h2>{itemDetails.price/100}</h2>
            <h2>{itemDetails.totalItems}</h2>
           
        </div>
    )
}

export default CartPage
