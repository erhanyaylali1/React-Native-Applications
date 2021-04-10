import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import AuthForm from '../components/AuthForm'

const SignupScreen = ({ navigation }) => {

    return (
        <View>
            <AuthForm
                title="Sign Up"
                navigation={navigation}
            />
        </View>
    )
}

export default SignupScreen