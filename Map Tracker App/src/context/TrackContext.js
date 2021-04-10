import axios from '../api/axios'
import React, { createContext, useReducer } from 'react'

const TrackContext = createContext()

const TrackReducer = (state, action) => {
    switch(action.type) {
        case 'SET_TRACKS':
            return { ...state, tracks: action.payload }
        default:
            return state
    }
}

const initalState = {
    tracks: []
}

export const TrackProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(TrackReducer, initalState)
  
    const fetchTracks = () => {
        axios.get('/tracks')
        .then((response) => {
            dispatch({
                type: 'SET_TRACKS',
                payload: response.data
            })}
        )
        .catch((err) => console.log(err))
    }

    const createTrack = (name, locations, callback) => {
        axios.post('/tracks', {
            name, 
            locations
        })
        .then(() => callback())
        .catch((err) => console.log(err))
    }
    
    const TrackData = {
        data: state,
        fetchTracks,
        createTrack
    }


    return (
        <TrackContext.Provider value={TrackData} >
            { children }
        </TrackContext.Provider>
    )
}

export default TrackContext