import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import store from './store/store'
import { Provider } from 'react-redux'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import ShopNavigator from './navigation/ShopNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { BreadProvider } from "material-bread"
import { ThemeProvider } from 'react-native-magnus'

export default function App() {

    const [isReady, setIsReady] = useState(false)

    const fetchFonts = () => {
        return Font.loadAsync({
            'antoutline': require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
            'antfill': require('@ant-design/icons-react-native/fonts/antfill.ttf')
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
        <ThemeProvider>
            <BreadProvider>
                <Provider store={store}>
                    <NavigationContainer>
                        <ShopNavigator />
                    </NavigationContainer>
                </Provider>
            </BreadProvider>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({});
