import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MealsNavigation from './MealsNavigation'
import Favorites from '../screens/FavoritesScreen'
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName="Meals"
                tabBarOptions={{
                    style: { height: 60 },
                    tabStyle: {
                        paddingVertical: 7,
                    },
                    labelStyle: {
                        fontSize: 14,
                        marginTop: 2
                    }
                }}
            >
                <Tab.Screen 
                    name="Meals" 
                    component={MealsNavigation} 
                    options={() => ({
                        tabBarIcon: ({ focused }) => {
                            const color = focused ? 'blue':'#333'
                            return <MaterialIcons name="fastfood" size={24} color={color} />
                        },
                    })}
                />
                <Tab.Screen 
                    name="Favorites" 
                    component={Favorites} 
                    options={() => ({
                        tabBarIcon: ({ focused }) => {                            
                            const color = focused ? 'blue':'#333'
                            return <MaterialIcons name="favorite" size={24} color={color} />
                        }
                    })}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default TabNavigation