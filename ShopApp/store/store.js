import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './UserSlice'
import ProductSlice from './ProductSlice'

export default configureStore({
    reducer: {
        user: UserSlice,
        products: ProductSlice
    }
})