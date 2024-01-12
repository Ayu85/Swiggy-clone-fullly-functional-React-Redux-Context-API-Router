import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({ //a part of redux store 
    name: "cart",  //name of the slice inside redux store
    initialState: {    //initial state of the cart
        items: [],
        restName: [],
       
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
        },
        addRestName: (state, action) => {
            state.restName.push(action.payload)
        },
   

    }

})
export default cartSlice.reducer;
export const { addItem, removeItem, clearCart, addRestName } = cartSlice.actions














/*
1-const store=configureStore({})
2-<Provider store={store}></Provider>
3-create cart slice 
        - createSlice({
            name:cart,
            initialState:{
                items:[]
            },
            reducers:{
                aditem=(state,payload)=>{}
                clearcart=(state)={}
            }
        })

      - export default cartSlice.reducer
      -export const {addItem,clearcart}=cartSlice.actions;
      
4- configureStore({
   reducer:{
     cart:cartSlice
    }
})  
5-subscribe to store
const cartItems={store=>store.cart.items}    
*/