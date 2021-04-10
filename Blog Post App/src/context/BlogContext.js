import React,{ createContext, useReducer } from 'react'
import posts from '../api/post'

const BlogContext = createContext()

const blogReducer = (state, action) => {

    switch(action.type) {

        case 'GET_POSTS': {
            return action.payload
        } 

        case 'ADD_POST':
            return [ ...state, { 
                id: (state.length + 1).toString(), 
                title: action.payload.title, 
                content: action.payload.content
            }]

        case 'DELETE_POST':
            return state.filter((item) => item.id !== action.payload )

        case 'UPDATE_POST':
            return state.map((item) => item.id === action.payload.id ? action.payload : item)

        default: 
            return state

    }
}

export const BlogProvider = ({ children }) => {

    const [state, dispatch] = useReducer(blogReducer, [])


    const getPosts = async () => {
        const response = await posts.get('/posts')
        dispatch({ type: 'GET_POSTS', payload: response.data })
    }


    const addPost = async (title, content, callback) => {
        await posts.post('/posts', { title, content })
            .then(() => {
                dispatch({ type: 'ADD_POST' , payload: { title, content }})
                callback()
            })        
    }

    const deletePost = async (id) => {
        await posts.delete(`/posts/${id}`)
            .then(() => dispatch({ type: 'DELETE_POST', payload: id }))        
    }

    const updatePost = async (id, title, content, callback) => {

        await posts.put(`/posts/${id}`, { title, content })
            .then(() => {
                dispatch({ type: 'UPDATE_POST', payload: { id, title, content }})
                callback()
            })
    }

    const blogPostContext = {
        data: state,
        addPost,
        deletePost,
        updatePost,
        getPosts
    }

    return (
        <BlogContext.Provider value={blogPostContext}>
            { children }
        </BlogContext.Provider>
    )
}

export default BlogContext