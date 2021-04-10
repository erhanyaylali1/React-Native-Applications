import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location'

export default (callback, isFocused, isTracking) => {

    const [err, setErr] = useState(false)

    useEffect(() => {
        startWatching()
    },[isFocused, err, isTracking])


    const startWatching = async () => {
        const respond = await requestPermissionsAsync()
        if(!respond.granted) {
            setErr(true)
            startWatching()
        } else {
            setErr(false)
            const subscriber = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10,
            }, callback)
            
            if(!isFocused, !isTracking) {
                subscriber.remove()
            }
        }
    }
    return [err]
}