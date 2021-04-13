import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import store from './store/store'
import { Provider } from 'react-redux'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import ShopNavigator from './navigation/ShopNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { BreadProvider } from "material-bread"

export default function App() {

    const [isReady, setIsReady] = useState(false)

    const fetchFonts = () => {
        return Font.loadAsync({
            'antoutline': require('@ant-design/icons-react-native/fonts/antoutline.ttf')
        })      
    }

    if(!isReady) {
        return (
            <AppLoading 
                startAsync={fetchFonts}
                onFinish={() => setIsReady(true)}
                onError={(err) => console.log(err)}
            />
        )
    }

    return (
        <BreadProvider>
            <Provider store={store}>
                <NavigationContainer>
                    <ShopNavigator />
                </NavigationContainer>
            </Provider>
        </BreadProvider>
    );
}

const styles = StyleSheet.create({});
