import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const RestourantDetail = ({ route }) => {

    const [result, setResult] = useState(null)
    const { id } = route.params;

    useEffect(() => {
        yelp.get(`/${id}`)
        .then((respond) => setResult(respond.data))

    },[])


    return (
        <View>
            {result && (
                <View style={styles.root}>
                    <Text style={styles.text}>
                        Restourant: {result.name}
                    </Text>
                    <Text style={styles.text}>
                        Address: {result.location.display_address.map((item) => `${item} `)}
                    </Text>
                    <Text style={styles.text}>
                        Phone: {result.display_phone}
                    </Text>
                    <Text style={styles.text}>
                        Rating: {result.rating}
                    </Text>
                    <Text style={styles.text}>
                        Working Time: 
                        {result.hours[0].open[0].start}-
                        {result.hours[0].open[0].end}
                    </Text>
                    <Text style={styles.photoText}>
                        Photos
                    </Text>
                    <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={result.photos}
                        keyExtractor={(photo) => photo}
                        renderItem={({ item }) => (
                            <Image 
                                style={styles.image}
                                source={{ uri: item }}
                            />
                        )}
                    />
                </View>
            )}
        </View>
    )
}

export default RestourantDetail

const styles = StyleSheet.create({
    root: {
        padding: 15,
        paddingTop: 20
    },
    image: {
        marginBottom: 30,
        width: 250,
        height: 150,
        borderRadius: 3,
        marginRight: 10
    },
    text: {
        marginBottom: 10,
        fontSize: 18
    },
    photoText: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 5,
    }
})
