import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { BlogProvider } from './src/context/BlogContext'
import HomeScreen from './src/screens/HomeScreen'
import PostScreen from './src/screens/PostScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'
import { Feather } from '@expo/vector-icons' 

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialScreen="Home">
                <Stack.Screen 
                    name="Home" 
                    component={ HomeScreen }
                    options={({ navigation }) => ({
                        title: 'Blog App',
                        headerRight: () => (
                            <View style={{ marginRight: 20 }}>
                                <TouchableOpacity>
                                    <Feather 
                                        name="plus"
                                        size= {25} 
                                        onPress={() => navigation.navigate('Create')}
                                    />
                                </TouchableOpacity>
                            </View>
                            
                        ) 
                    })}
                />
                <Stack.Screen 
                    name="Post" 
                    component={ PostScreen }
                    options={({ route, navigation }) => ({ 
                        title: `Post #${route.params.id}`,
                        headerRight: () => (
                            <View style={{ marginRight: 20 }}>
                                <TouchableOpacity>
                                    <Feather 
                                        name="edit"
                                        size= {25} 
                                        onPress={() => navigation.navigate('Edit', { id: route.params.id })}
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                />
                <Stack.Screen 
                    name="Create" 
                    component={ CreateScreen }
                    options={{ title: `Create Post` }}
                />
                <Stack.Screen 
                    name="Edit" 
                    component={ EditScreen }
                    options={({ route }) => ({ title: `Edit Post` })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default () => (
    <BlogProvider>
        <App />
    </BlogProvider>
)
