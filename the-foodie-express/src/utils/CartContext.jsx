import { createContext } from "react";

const CartContext = createContext({
    itemDetails: {
        price: 0,
        name: "no item added",
        totalItems: 0,
    }
})
export default CartContext