import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    deliveryFee: 15,
    freeDeliveryFrom: 200,

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newProduct = action.payload.product; // 
            const cartItem = state.items.find((item) => item.product.id === newProduct.id);

            if(cartItem){
                cartItem.quanity += 1
            } else {
                state.items.push({product: newProduct, quanity: 1}) // pushing 1 to the quanity property in the product obj. 

            }

        },
        changeQuanity: (state, action) => {

        }
    }
})