import React from 'react'
import { Button } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack'
import FiltersScreen from '../screens/FiltersScreen'
import CategoryScreen from '../screens/CategoryScreen'
import { MaterialIcons } from '@expo/vector-icons' 
import FoodDetailScreen from '../screens/FoodDetailScreen'
import { useDispatch, useSelector } from 'react-redux'
import { getFavoriteFoods, addFavoriteFoods, deleteFavoriteFood } from '../redux/foodsSlice'

const Stack = createStackNavigator();

const FilterNavigation = () => {
    return (
        <Stack.Navigator 
            name="FilterNavigation" 
            initialRouteName="Filter"
            screenOptions={{
                headerTitleAlign: "center",
                headerLeftContainerStyle: {
                    marginLeft: 10
                }
            }}
        >
            <Stack.Screen 
                name="Filter" 
                component={FiltersScreen} 
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Button
                            type="clear"
                            icon={<MaterialIcons name="menu" size={24} color="#111" />}
                            onPress={() => navigation.openDrawer()}
                        />
                    )
                })}
            />
            <Stack.Screen 
                name="List" 
                options={{
                    headerTitle: 'Results'
                }}
                component={CategoryScreen} 
            />
            <Stack.Screen 
                name="FoodDetail" 
                component={FoodDetailScreen} 
                options={({ route }) => ({
                    headerTitle: route.params.item.title,
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

export default FilterNavigation