import * as Location from 'expo-location'
import LocationContext from './context/LocationContext'

const tenMetersWithDegress = 0.0001

const getLocation = (increment) => ({
    timestamp: 1000000,
    coords: {
        speed: 0,
        heading: 0,
        accuracy: 5,
        altitudeAccuracy: 5,
        altitude: 5,
        latitude: 38.4237 + increment * tenMetersWithDegress,
        longitude: 27.1428 + increment * tenMetersWithDegress
    }
})

let counter = 0

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++
}, 2000)