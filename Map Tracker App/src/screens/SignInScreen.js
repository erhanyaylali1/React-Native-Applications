import React from 'react'
import { View } from 'react-native'
import AuthForm from '../components/AuthForm'

const SignInScreen = ({ navigation }) => {
    
    return (
        <View>
            <AuthForm
                title="Sign In"
                navigation={navigation}
            />
        </View>
    )
}

export default SignInScreen