import AsyncStorage from '@react-native-community/async-storage'
import React, { useReducer } from 'react'
import axios from '../api/axios'

const AuthContext = React.createContext()

const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, isLogged: true, user: action.payload }
        case 'SIGN_OUT':
            return { ...state, isLogged: false, user: null }
        case 'SIGN_UP':
            return { ...state, isLogged: true, user: action.payload }
        case 'ADD_ERROR':
            return { ...state, error: action.payload }
        case 'RESET_ERROR':
            return { ...state, error: null }
    }
}

const initalState = {
    isLogged: false,
    user: null,
    error: null
}

export const AuthProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(AuthReducer, initalState)

    const trySignIn = async (first, second) => {   
        const token = await AsyncStorage.getItem('token')
        if(token) {
            dispatch({ type: 'SIGN_IN', payload: token })
            first()
        } else {
            second()
        }
    }   

    const signIn  = (user, next) => {
        axios.post('/signin', user)
        .then(async ({ data: { token }}) => {
            dispatch({ type: 'SIGN_IN', payload: token})
            await AsyncStorage.setItem('token', token)
            resetError()
            next()
        })
        .catch((err) => addError(err.response.data))
    }

    const signUp  = (user, next) => {
        axios.post('/signup', user)
        .then(async ({ data: { token }}) => {
            dispatch({ type: 'SIGN_UP', payload: token})
            await AsyncStorage.setItem('token', token)
            resetError()
            next()
        })
        .catch((err) => addError(err.response.data))
    }

    const signOut = async (next) => {
        await AsyncStorage.removeItem('token')
        dispatch({ type: 'SIGN_OUT' })
        next()
    }

    const addError = (err) => {
        dispatch({ type: 'ADD_ERROR', payload: err })
    }

    const resetError = () => {
        dispatch({ type: 'RESET_ERROR' })
    }

    const authData = {
        data: state,
        signOut,
        signIn,
        signUp,
        addError,
        resetError,
        trySignIn
    }

    return (
        <AuthContext.Provider value={authData} >
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext