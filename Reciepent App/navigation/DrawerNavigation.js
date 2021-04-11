import React from 'react'
import { Text } from 'react-native-elements'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import FilterNavigation from './FilterNavigation'
import TabNavigation from './TabNavigation'
import { Ionicons  } from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

export default DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home" 
        drawerStyle={{
            paddingTop: 30
        }}        
        drawerType="slide"
        screenOptions={{ 
            swipeEnabled: true,            
        }}
    >
        <Drawer.Screen 
            name="Home" 
            component={TabNavigation} 
            options={{
                drawerIcon: () => <Ionicons name="md-home" size={24} color="black" style={{ marginLeft: 15 }} />,
            }}
        
        />
        <Drawer.Screen 
            name="Filter" 
            component={FilterNavigation} 
            options={{
                drawerIcon: () => <Ionicons name="md-filter" size={24} color="black" style={{ marginLeft: 15 }} />
            }}
        
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
