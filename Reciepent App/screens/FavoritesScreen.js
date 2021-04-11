import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import MealItem from '../components/MealItem'
import { useSelector } from 'react-redux'
import { getFavoriteFoods } from '../redux/foodsSlice'

const FavoritesScreen = ({ navigation }) => {

    const favoriteFoods = useSelector(getFavoriteFoods)
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={favoriteFoods}
                renderItem={({item}) => <MealItem item={item} navigation={navigation} />}
            />
        </View>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
