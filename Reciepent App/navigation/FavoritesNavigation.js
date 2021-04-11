import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Button } from 'react-native-elements'
import FavoritesScreen from '../screens/FavoritesScreen'
import FoodDetailScreen from '../screens/FoodDetailScreen'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { deleteFavoriteFood } from '../redux/foodsSlice'

const Stack = createStackNavigator();

const MealsNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Favorites">
            <Stack.Screen 
                name="Favorites" 
                component={FavoritesScreen}
                options={{
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen 
                name="FoodDetail" 
                component={FoodDetailScreen} 
                options={({ route, navigation }) => ({
                    title: route.params.title,
                    headerTitleAlign: 'center',
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
                    headerRight: () => {
                        const dispatch = useDispatch()
                        return (
                            <Button
                                icon={<MaterialIcons name="favorite" size={22} color="#333" />}
                                type="clear"
                                onPress={() => {
                                    dispatch(deleteFavoriteFood(route.params.item))
                                    navigation.navigate('Meals')
                                }}
                            />
                        )
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
