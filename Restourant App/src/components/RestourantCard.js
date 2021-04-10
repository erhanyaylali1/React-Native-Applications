import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function RestourantCard({ restourant }) {

    return (
        <View style={styles.root}>
            <Image 
                style={styles.image}
                source={{ uri : restourant.image_url }}
            />
            <Text style={styles.title}>{ restourant.name }</Text>
            <Text>{restourant.rating} Stars, {restourant.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 5,
        marginBottom: 5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    }
})
