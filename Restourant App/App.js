import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen'
import RestourantCard from './src/screens/RestourantDetail'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer style={styles.root}>
            <Stack.Navigator name="Restourant App" initialRouteName="Restourant App">
                <Stack.Screen 
                    name="Restourant App" 
                    title="Restourants" 
                    component={HomeScreen} 
                    options={{ title: "Restourants" }}
                />
                <Stack.Screen 
                    name="Restourant Detail" 
                    component={RestourantCard} 
                    options={({ route }) => ({ title: route.params.name })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        flex: 1,
    }
})

export default App;