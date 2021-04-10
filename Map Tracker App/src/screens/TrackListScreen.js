import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import { ListItem, Text } from 'react-native-elements'
import TrackContext from '../context/TrackContext'
import { AntDesign } from '@expo/vector-icons'

const TrackListScreen = ({ route, navigation }) => {

    const { data: { tracks }, fetchTracks } = useContext(TrackContext)

    useEffect(() => {
        fetchTracks()
    },[route])

    return (
        <View style={styles.container}>

            <Text h4 style={styles.title}>Your Tracks</Text>
            <FlatList 
                data={tracks}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TrackDetails',{
                            id: item._id
                        })}
                    >
                        <ListItem containerStyle={styles.each} >
                            <ListItem.Title>{item.name}</ListItem.Title>
                            <AntDesign name="caretright" style={styles.icon} />
                        </ListItem>
                    </TouchableOpacity>
                )}

            />
        </View>
    )
}

export default TrackListScreen

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 80
    },
    title :{
        marginLeft: 15,
        marginBottom: 30,
    },
    each: {
        backgroundColor: 'transparent'
    },
    icon: {
        color: 'black',
        marginLeft: 'auto'
    }
})
