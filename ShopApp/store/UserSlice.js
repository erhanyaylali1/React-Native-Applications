import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'User',
    initialState: {
        user: null,
        cart: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            state.cart.push(action.payload)
        }
    }
})

export const { addItemToCart } = userSlice.actions
export const getCart = (state) => state.User.cart
export const getUser = (state) => state.User.user
export default userSlice.reducer