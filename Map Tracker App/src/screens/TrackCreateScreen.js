import React, { useContext } from 'react'
import { StyleSheet, Platform, Text, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import { useIsFocused } from '@react-navigation/native';
import LocationContext from '../context/LocationContext'
import Map from '../components/Map'
import '../_mockLocation'
import useLocation from '../hooks/useLocation'

const TrackCreateScreen = ({ navigation }) => {

    const { data: { recording }, addLocation }  = useContext(LocationContext)
    const isFocused = useIsFocused()
    const [err] = useLocation(addLocation, isFocused, recording)
    
    return (
        <SafeAreaView style={styles.root}>
            <Map navigation={navigation} />
            {err ? (
                <Button 
                    title="Please Enable Location Services On The Settings"
                    type="outline"
                />
            ):<Text></Text>}
        </SafeAreaView>
    )
}

export default TrackCreateScreen

const styles = StyleSheet.create({
    root: {
        marginTop: Platform.OS === 'web' ? 20:80,
        margin: 20,
        marginHorizontal: 0,
        flex: 1
    }
})
