import React, { useContext, useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import AuthContext from '../context/AuthContext'

const AuthForm = ({ title, navigation }) => {

    const { data: { error }, signUp, signIn, resetError } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const RedirectText = title === 'Sign Up' ? 
    'Already Have a Account? Go To Sign In':
    'Don\'t You Have Account? Go To Sign Up'

    const redirect = () => {
        resetError()
        setEmail('')
        setPassword('')
        if (title === 'Sign Up') {
            navigation.replace('SignIn')
        } else {    
            navigation.replace('SignUp')
        }
    }

    const onSubmitHandler = () => {
        if (title === 'Sign Up') {
            signUp({ email, password }, () => navigation.navigate('SignedIn'))
        } else {    
            signIn({ email, password }, () => navigation.navigate('SignedIn'))
        }
    }

    return (
        <View style={styles.root}>
            <Text h3 style={styles.title}>{ title }</Text>
            <Input 
                type="email"
                label="Email"
                autoCapitalize='none'
                autoCorrect={false}
                value={email}
                style={styles.input}
                onChangeText={(value) => setEmail(value)}
            />
            <Input 
                label="Password"
                value={password}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
                style={styles.input}
                onChangeText={(value) => setPassword(value)}
            />
            <Text style={styles.error}>{error}</Text>
            <Button 
                style={styles.button}
                onPress={onSubmitHandler}
                title={title}
            />
            <TouchableOpacity activeOpacity={0.6} onPress={redirect}>
                <Text style={styles.link}>{RedirectText}</Text>                
            </TouchableOpacity>
        </View>
    )
}

export default AuthForm

const styles = StyleSheet.create({
    root: {
        paddingTop: 90,
        padding: 20,
        alignContent: 'center'
    },
    title: {
        textAlign: 'center',
        marginBottom: 30
    },
    error: {
        color: 'red', 
        marginBottom: 20,
        textAlign: 'center'
    },
    button: {
        marginVertical: 20
    },
    link: {
        marginTop: 15,
        color: '#0f75bd',
        fontSize: 16,
        textAlign: 'center'
    }
})

