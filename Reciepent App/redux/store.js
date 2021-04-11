import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './categorySlice'
import foodsSlice from './foodsSlice'

export default configureStore({
    reducer: {
        categories: categorySlice,
        foods: foodsSlice
    },
    middleware: null
});