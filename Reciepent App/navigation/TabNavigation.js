import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MealsNavigation from './MealsNavigation'
import FavoritesNavigation from './FavoritesNavigation'
import { MaterialIcons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'


const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Meals"
            activeColor="blue"
            shifting
            barStyle={{ backgroundColor: 'white' }}
        >
            <Tab.Screen 
                name="Meals" 
                component={MealsNavigation} 
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? 'blue':'#333'
                        return <MaterialIcons name="fastfood" size={24} color={color} />
                    }
                })}
            />
            <Tab.Screen 
                name="Favorites" 
                component={FavoritesNavigation} 
                options={() => ({
                    tabBarIcon: ({ focused }) => {                            
                        const color = focused ? 'blue':'#333'
                        return <MaterialIcons name="favorite" size={24} color={color} />
                    }
                })}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation