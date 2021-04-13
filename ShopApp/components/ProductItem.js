import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Paper } from 'material-bread'
import { Title, Paragraph, IconButton } from 'react-native-paper'
import { Card, Text } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ProductItem = ({ item }) => {
    return (
        <Paper
            style={styles.paper}
            shadow={3}
        >
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.content}>
                <Title>{ item.title }</Title> 
                <Paragraph>{ item.description} </Paragraph>
            </View>
            <View style={styles.actions}>
                <View style={styles.div} />
                <View style={styles.div} >
                    <Text h5 style={styles.price}>$ { item.price } </Text>
                </View>
                <View style={[styles.div, styles.buttonDiv]} >
                    <IconButton 
                        icon="cart-plus"
                        size={25}
                        onPress={() => null}
                    />
                </View>
            </View>
        </Paper>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    paper: {
        marginBottom: 20,
        borderRadius: 10,
        paddingHorizontal: 20
    },
    image: {
        height: 200,
        width: '100%',
    },
    content: {
        paddingVertical: 10
    },
    divider: {
        marginBottom: 0
    },  
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    price: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '500',
    },
    div: {
        flex: 1,
        flexDirection: 'row',
    },
    buttonDiv: {
        justifyContent: 'flex-end'
    }
})
