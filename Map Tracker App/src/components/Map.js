import React, { useContext } from 'react'
import MapView, { Polyline, Circle } from 'react-native-maps';
import { StyleSheet,  View } from 'react-native'
import { Text } from 'react-native-elements'
import LocationContext from '../context/LocationContext';
import { ActivityIndicator } from 'react-native';
import TrackForm from './TrackForm'

const Map = ({ navigation }) => {
    
    const { data: { locations, currentLocation } } = useContext(LocationContext)

    if(!currentLocation) return <ActivityIndicator size="large"  style={styles.loading} />
    
    return (
        <View style={styles.root}>
            <Text h4 style={styles.title}>Create a Track</Text>
            <MapView 
                style={styles.map}
                initialRegion={{
                    longitude: currentLocation.longitude,
                    latitudeDelta: 0.01,
                    latitude: currentLocation.latitude,
                    longitudeDelta: 0.01
                }}
            >
                <Polyline 
                    coordinates={locations}
                    strokeColor="rgba(0,0,255,1)"
                />
                <Circle
                    radius={25}
                    fillColor= "rgba(0, 0,255,1)"
                    center={currentLocation}
                />
            </MapView>
            <TrackForm 
                navigation={navigation}
            />        
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    root: {
        flex: 1
    },  
    title: {
        marginBottom: 20,
        marginLeft: 20
    },
    map: {
        height: 400,
        marginBottom: 50
    },
    loading: {
        marginTop: 200,
    }
})
