import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthProvider } from './src/context/AuthContext'
import { LocationProvider } from './src/context/LocationContext'
import { TrackProvider } from './src/context/TrackContext'
import 'react-native-gesture-handler'
import AccountScreen from './src/screens/AccountScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import SignInScreen from './src/screens/SignInScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import LoadingScreen from './src/screens/LoadingScreen'
import { MaterialIcons } from '@expo/vector-icons'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Loading"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="NotSignedIn" component={NotLoggedInNavigation} />
                <Stack.Screen name="SignedIn" component={LoggedInNavigation} />
                <Stack.Screen name="Loading" component={LoadingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
 
const LoggedInNavigation = () => (
    <Tab.Navigator
        tabBarOptions={{
            style: {
                height: 50
            }
        }}
    >
        <Tab.Screen 
            options={{
                title: 'Tracks',
                tabBarIcon: ({ color, size }) => (<MaterialIcons name="list" color={color} size={size} />)
            }}
            name="Tracks" 
            component={Tracks} 
        />
        <Tab.Screen 
            options={{
                title: 'New Track',
                tabBarIcon: ({ color, size }) => (<MaterialIcons name="add" color={color} size={size} />),
            }}
            name="TrackCreate" 
            component={TrackCreateScreen} 
        />
        <Tab.Screen 
            options={{
                title: 'My Account',
                tabBarIcon: ({ color, size }) => (<MaterialIcons name="account-circle" color={color} size={size} />)
            }}
            name="Account" 
            component={AccountScreen} 
        />
    </Tab.Navigator>
)

const NotLoggedInNavigation = () => (
    <Stack.Navigator 
        initialRouteName="SignIn"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} 
            onSignIn={() => setIsLoggedIn(true)} 
        />
    </Stack.Navigator>
)

const Tracks = () => (
    <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }}  name="TrackList" component={TrackListScreen} />
        <Stack.Screen name="TrackDetails" component={TrackDetailScreen} options={{
            title: 'Track'
        }} />
    </Stack.Navigator>
)

export default () => (
    <AuthProvider>
        <LocationProvider>
            <TrackProvider>
                <App />
            </TrackProvider>
        </LocationProvider>
    </AuthProvider>
)
    