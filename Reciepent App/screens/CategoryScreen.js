import React from 'react'
import { FlatList, StyleSheet,  View } from 'react-native'
import { Text } from 'react-native-elements'
import MealItem from '../components/MealItem'
import { useSelector } from 'react-redux'
import { getFoods } from '../redux/foodsSlice'

const CategoryScreen = ({ route, navigation }) => {
    
    let meals = null
    if(route.params.type === 'Category'){
        const id = route.params.id
        meals = useSelector(getFoods).filter((item) => item.categoryIds.indexOf(id) >= 0)
    } else if(route.params.type === 'Filter') {
        const { gluten, lactose, vegan, vegeterian, timeRange, number } = route.params.filters
        meals = useSelector(getFoods).filter((item) => {
            if(gluten) 
                if(!item.isGlutenFree)
                    return 
            if(lactose)
                if(!item.isLactoseFree)
                    return 
            if(vegan)         
                if(!item.isVegan)
                    return 
            if(vegeterian)
                if(!item.isVegetarian)
                    return 
            if(timeRange)
                if(item.duration < Math.min(...number) || item.duration > Math.max(...number))
                    return
            return item          
        })
    }
    
    if(meals && meals.length > 0) {
        return (
            <View style={styles.container}>
                <FlatList
                    data={meals}
                    style={styles.list}
                    renderItem={({ item }) => <MealItem item={item} navigation={navigation} />}
                />
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Text h4>No Result Found.</Text>
            </View>
        )
    }

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