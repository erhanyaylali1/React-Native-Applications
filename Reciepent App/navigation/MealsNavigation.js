import React from 'react'
import { Button } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryScreen from '../screens/CategoryScreen'
import FoodDetailScreen from '../screens/FoodDetailScreen'
import { useSelector, useDispatch } from 'react-redux'
import { getFavoriteFoods, addFavoriteFoods, deleteFavoriteFood } from '../redux/foodsSlice'
import { AntDesign } from '@expo/vector-icons' 
import { MaterialIcons } from '@expo/vector-icons'

const Stack = createStackNavigator();

const MealsNavigation = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Categories" 
            screenOptions={({ navigation }) => ({
                headerLeft: () => (
                    <Button 
                        type="clear"
                        titleStyle={{ color: '#333', marginLeft: 7, fontSize: 17 }}
                        icon={<AntDesign name="arrowleft" size={22} color="#333" />}
                        onPress={() => navigation.goBack()}
                    />
                ),
                headerLeftContainerStyle: {
                    marginLeft: 10
                },
            })}
        >
            <Stack.Screen 
                name="Categories" 
                component={CategoriesScreen} 
                options={() => ({
                    title: "Meal Categories",
                    headerTitleStyle: {
                        marginLeft: 10
                    },
                    headerTitleAlign: 'center',
                    headerLeft: null
                })}                    
            />

            <Stack.Screen 
                name="Category" 
                component={CategoryScreen} 
                options={({ route }) => ({
                    title: route.params.title,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: route.params.color
                    },
                    headerTitleStyle: {
                        color: 'black',
                        fontSize: 20,
                    },
                    headerRight: () => (
                        <Button
                            icon={<AntDesign name="plus" size={22} color="#333" />}
                            type="clear"
                        />
                    ),
                    headerRightContainerStyle: {
                        marginRight: 10
                    }                        
                })}
            />

            <Stack.Screen 
                name="FoodDetail" 
                component={FoodDetailScreen} 
                options={({ route, navigation }) => ({
                    title: route.params.item.title,
                    headerTitleAlign: 'center',
                    headerRight: () => {
                        const isFavorited = useSelector(getFavoriteFoods).find((item) => item === route.params.item)
                        const dispatch = useDispatch()
                        if(isFavorited) {
                            return (
                                <Button
                                    icon={<MaterialIcons name="favorite" size={22} color="#333" />}
                                    type="clear"
                                    onPress={() => dispatch(deleteFavoriteFood(route.params.item))}
                                />
                            )
                        } else {
                            return (
                                <Button
                                    icon={<MaterialIcons name="favorite-outline" size={22} color="#333" />}
                                    type="clear"
                                    onPress={() => {
                                        dispatch(addFavoriteFoods(route.params.item))
                                        navigation.navigate('Favorites')
                                    }}
                                />
                            )
                        }
                    },
                    headerRightContainerStyle: {
                        marginRight: 10
                    }    
                })}
            />
        </Stack.Navigator>
    )
}

export default MealsNavigation
