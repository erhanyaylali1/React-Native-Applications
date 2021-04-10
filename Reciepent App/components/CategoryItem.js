import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'

const CategoryItem = ({ item, navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                activeOpacity={0.7}
                style={{...styles.item, backgroundColor: item.color}}
                onPress={() => navigation.navigate('Category', {
                    id: item.id,
                    title: item.title,
                    color: item.color
                })}
            >
                <ListItem containerStyle={{ ...styles.itemContainer}}>
                    <ListItem.Title style={styles.title}>
                        { item.title }
                    </ListItem.Title>
                </ListItem>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    item: {
        marginVertical: 10,
        borderRadius: 10,
        marginBottom: 10,
        borderRadius: 20,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 10,
    },
    title: {
        marginLeft: 15,
        fontSize: 25,
        fontFamily: 'open-sans'
    },
    itemContainer: {
        height: 150,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
        paddingVertical: 20,
        paddingHorizontal: 25
    },  
})
