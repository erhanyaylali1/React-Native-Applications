import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import DrawerNavigation from './navigation/DrawerNavigation'
import { Provider } from 'react-redux'
import store from './redux/store'

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf')
    })
}

const App = () => {

    const [fontLoaded, setFontLoaded] = useState(false)

    if (!fontLoaded) {
        return (
            <Provider store={store}>
                <AppLoading 
                    startAsync={fetchFonts} 
                    onFinish={() => setFontLoaded(true)} 
                    onError={() => console.log("error")}
                />
            </Provider>
        )
    }
    return (
        <Provider store={store}>
            <DrawerNavigation />
            <StatusBar />
        </Provider>
    )
}

export default App