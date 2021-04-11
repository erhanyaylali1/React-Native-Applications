import React from 'react'
import { StyleSheet, ScrollView, View, LogBox } from 'react-native'
import { Text, Image } from 'react-native-elements'
import{ useSelector } from 'react-redux'
import { getFoods } from '../redux/foodsSlice'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import CardDetailItem from '../components/CardDetailItem'

const FoodDetailScreen = ({ route }) => {

    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])

    const id = route.params.id
    const meal = useSelector(getFoods).find((item) => item.id === id)
    
    const data = [
        {
            title: "Affordability",
            data: meal.affordability,
            icon: <AntDesign name="infocirlceo" size={24} color="black" />
        },
        {
            title: "Complexity",
            data: meal.complexity,
            icon: <AntDesign name="dashboard" size={24} color="black" />
        },
        {
            title: "Duration",
            data: `${meal.duration} minute`,
            icon: <AntDesign name="clockcircleo" size={24} color="black" />
        }
    ]
    const data2 = [
        {
            title: meal.isVegan ? 'Vegan':'Not Vegan',
            icon: meal.isVegan ? <AntDesign name="check" size={24} color="green" />:
            <AntDesign name="close" size={24} color="red" />
        },
        {
            title: meal.isVegetarian ? 'Vegeterian':'Not Vegeterian',
            icon: meal.isVegetarian ? <AntDesign name="check" size={24} color="green" />:
            <AntDesign name="close" size={24} color="red" />
        },
        {
            title: meal.isGlutenFree ? 'Gluten Free':'Not Gluten Free',
            icon: meal.isGlutenFree ? <AntDesign name="check" size={24} color="green" />:
            <AntDesign name="close" size={24} color="red" />
        },
        {
            title: meal.isLactoseFree ? 'Lactose Free':'Not Lactose Free',
            icon: meal.isLactoseFree ? <AntDesign name="check" size={24} color="green" />:
            <AntDesign name="close" size={24} color="red" />
        }
    ]
    
    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: meal.imageUrl }}
                style={styles.image}
            />
            <View style={{ marginBottom: 40 }}>
                <Text style={styles.title}>{meal.title}</Text>
            </View>

            <CardDetailItem 
                data={data}
                title="Features"
                icon={<AntDesign name="pushpin" size={24} color="black" />}
            />

            <CardDetailItem 
                data={data2}
                title="Diet Type"
                icon={<AntDesign name="tag" size={24} color="black" />}
            />

            <CardDetailItem 
                data={meal.ingredients}
                title="Ingredients"
                icon={<Entypo name="shopping-cart" size={24} color="black" />}
            />

            <CardDetailItem 
                data={meal.steps}
                title="Steps"
                icon={<MaterialCommunityIcons name="clipboard-list" size={24} color="black" />}
            />
        </ScrollView>
    )
}

export default FoodDetailScreen

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '700',
        fontFamily: 'open-sans-bold'
    },
    image: {
        marginTop: 2,
        height: 300,
        width: 500,
        marginBottom: 30,
    },
})