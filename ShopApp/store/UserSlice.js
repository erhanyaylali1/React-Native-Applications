import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        cart: [],
        totalAmount: 0,
    },
    reducers: {
        addItemToCart: (state, action) => {
            let isAlreadyAdded = false
            state.cart.forEach((item, index) => {
                if(item.id === action.payload.id) {
                    item.count += 1
                    isAlreadyAdded = true
                }
            })
            if(!isAlreadyAdded) {
                state.cart.push({ ...action.payload, count: 1 })
            }            
            state.totalAmount += action.payload.price
        },
        deleteItemFromCart: (state, action) => {
            let index = -1
            state.cart.forEach((item, index2) => {
                if(item.id === action.payload.id) {
                    index = index2
                }
            })
            if (index !== -1) {
                state.cart.splice(index, 1)
                state.totalAmount -= action.payload.price
            }
        },
        changeCount: (state, action) => {
            state.cart.forEach((elm, index) => {
                if(elm.id === action.payload.item.id) {
                    if(action.payload.type === "inc") {
                        elm.count += 1
                        state.totalAmount += action.payload.item.price
                    } else {
                        elm.count -= 1
                        state.totalAmount -= action.payload.item.price
                        if(!elm.count) {
                            state.cart.splice(index, 1)
                        }
                    }
                }
            })
        },
        clearCart: (state) => {
            state.cart = [],
            state.totalAmount = 0
        }
    }
})

export const { addItemToCart, clearCart, deleteItemFromCart, changeCount } = userSlice.actions
export const getCart = (state) => state.user.cart
export const getUser = (state) => state.user.user
export const getCartCount = (state) => state.user.cart.length
export const getCartAmount = (state) => state.user.totalAmount
export default userSlice.reducer