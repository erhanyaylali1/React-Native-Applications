import React from 'react'
import { FlatList, StyleSheet,  View } from 'react-native'
import MealItem from '../components/MealItem'
import { MEALS } from '../data/data'

const CategoryScreen = ({ route, navigation }) => {
    
    const id = route.params.id
    const color = route.params.color
    const meals = MEALS.filter((item) => item.categoryIds.indexOf(id) >= 0)

    return (
        <View style={styles.container}>
            <FlatList
                data={meals}
                style={styles.list}
                renderItem={({ item }) => <MealItem item={item} navigation={navigation} color={color} />}
            />
        </View>
    )
}

export default CategoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        flex: 1,
        width: '100%',
        paddingVertical: 0,
    }
})