import { createSlice } from '@reduxjs/toolkit'
import Category from '../models/category';

export const categorySlice = createSlice({
    name: "categories",
    initialState: {
        categories: [
            new Category('1', 'Italian', '#f5428d'),
            new Category('2', 'Quick & Easy', '#f54242'),
            new Category('3', 'Hamburgers', '#f5a442'),
            new Category('4', 'German', '#f5d142'),
            new Category('5', 'Light & Lovely', '#368dff'),
            new Category('6', 'Exotic', '#41d95d'),
            new Category('7', 'Breakfast', '#9eecff'),
            new Category('8', 'Asian', '#b9ffb0'),
            new Category('9', 'French', '#ffc7ff'),
            new Category('10', 'Summer', '#47fced'),
            new Category('11', 'Arabic', '#c5a5c5'),
            new Category('12', 'Thai', '#c0cafa'),
            new Category('13', 'Breakfast', '#b9c1a6'),
        ]
    },
    reducers: {
        addCategory: (state, action) => {
            state.categories.push(action.payload)
        }
    },
})

export const { addCategory } = categorySlice.actions;
export const getCategories = (state) => state.categories.categories;
export default categorySlice.reducer;