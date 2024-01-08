import React, { useContext } from 'react'
import CartContext from '../utils/CartContext'

const CartPage = () => {
    const { itemDetails } = useContext(CartContext)
    return (
        <div>
            <h1>Cart Page</h1>
            <h1>{itemDetails.name}</h1>
            <h2>{itemDetails.price.toString().substring(0, 3)}</h2>
            <h2>{itemDetails.totalItems}</h2>
        </div>
    )
}

export default CartPage
