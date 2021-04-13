import { createSlice } from '@reduxjs/toolkit'
import PRODUCTS from '../data/products'

export const productSlice = createSlice({
    name: 'Products',
    initialState: {
        products: PRODUCTS,
        userProducts: []
    },
    reducers: {
        setUserProducts: (state, action) => {
            userProducts = PRODUCTS.filter((item) => item.ownerId === action.payload)
        }
    }
})

export const getProducts = (state) => state.products.products
export const getUserProducts = (state) => state.products.userProducts

export default productSlice.reducer