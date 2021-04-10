import React, { createContext, useReducer } from 'react'

const LocationContext = createContext()

const LocationReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_LOCATION':
            return { 
                ...state, 
                locations: [ ...state.locations, action.payload ], 
                currentLocation: action.payload
            }

        case 'START_RECORDING': 
            return { ...state, recording: true, name: action.payload }

        case 'STOP_RECORDING': 
            return initalState

        default:
            return state
    }
}

const initialPosition = {
    speed: 0,
    heading: 0,
    accuracy: 5,
    altitudeAccuracy: 5,
    altitude: 5,
    latitude: 38.4237,
    longitude: 27.1428 
}

const initalState = {
    recording: false,
    locations: [],
    currentLocation: initialPosition,
    name: ''
}

export const LocationProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(LocationReducer, initalState)

    const startRecording = (payload) => {
        dispatch({ type: 'START_RECORDING', payload })
    }

    const stopRecording = () => {
        dispatch({ type: 'STOP_RECORDING' })
    }

    const addLocation = (location) => {
        dispatch({ type: 'ADD_LOCATION', payload: location.coords })
    }

    const locationData = {
        data: state,
        startRecording,
        stopRecording,
        addLocation
    }

    return (
        <LocationContext.Provider value={locationData} >
            { children }
        </LocationContext.Provider>
    )
}

export default LocationContext