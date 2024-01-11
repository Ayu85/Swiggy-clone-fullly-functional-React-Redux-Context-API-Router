import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({ //a part of redux store 
    name: "cart",  //name of the slice inside redux store
    initialState: {    //initial state of the cart
        items: ["Boondi Laddu", "Rasmalai"]
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)   //to add item to cart , action.payload is the data which we will pass on clicking the  add button 
        },
        removeItem: (state) => {  // to remove an item from the cart
            state.items.pop()
        },
        clearCart: (state) => {
            state.items = []  // to clear the whole cart at once
        }

    }

})
export default cartSlice.reducer;
export const{ addItem, removeItem, clearCart }= cartSlice.actions