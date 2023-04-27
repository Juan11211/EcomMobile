import { createSlice } from '@reduxjs/toolkit';
import products from '../data/products';

const initialState = {
    products: products,
    selectedProduct: null
} ; 

export const productsSlice = createSlice({ // GLOBAL STATE
    name: 'products', // params
    initialState, // simplified instead of initialState: initialState
    reducers: {
//         setSelectedProduct: (state, action) => { // action is productId 
//             const productId = action.payload, // id of id of product selected
//             state.selectedProduct = state.products.find((p) => p.id === productId )
            
//         }
//     } // reducers -  function to update state
// })

setSelectedProduct: (state, action) => {
    const productId = action.payload;
    state.selectedProduct = state.products.find((p) => p.id === productId);
  },
},
});

