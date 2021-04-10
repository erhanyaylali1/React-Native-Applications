import React,{ useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TrackContext from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ route }) => {

    const { id } = route.params
    const { data: { tracks } } = useContext(TrackContext)
    const track = tracks.find((item) => item._id === id)
    console.log(track)

    return (
        <View>
            <Text style={styles.title}>
                Track: {track.name}
            </Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    longitudeDelta: 0.1,
                    latitudeDelta: 0.1,
                    longitude: track.locations[0].longitude,
                    latitude: track.locations[0].latitude
                }}
            >            
                <Polyline 
                    coordinates={track.locations}
                    strokeColor="rgba(0,0,255,1)"
                />
            </MapView>
        </View>
    )
}

export default TrackDetailScreen

const styles = StyleSheet.create({
    title: {
        marginVertical: 20,
        fontSize: 20,
        marginLeft: 20,
        textTransform: 'capitalize'
    },  
    map: {
        height: 300,
        width: '100%'
    }
})
