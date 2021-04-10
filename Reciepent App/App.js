import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import MealsNavigation from './navigation/MealsNavigation'
import TabNavigation from './navigation/TabNavigation';

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf')
    })
}

export default function App() {

    const [fontLoaded, setFontLoaded] = useState(false)

    if (!fontLoaded) {
        return (
            <AppLoading 
                startAsync={fetchFonts} 
                onFinish={() => setFontLoaded(true)} 
                onError={() => console.log("error")}
            />
        )
    }
    return (
        <React.Fragment>
            <TabNavigation />
            <StatusBar />
        </React.Fragment>
    )
}
