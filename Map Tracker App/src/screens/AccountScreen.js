import React, { useContext } from 'react'
import { StyleSheet, Text, Button, StatusBar, SafeAreaView, Platform } from 'react-native'
import AuthContext from '../context/AuthContext'

const AccountScreen = ({ navigation }) => {

    const { signOut } = useContext(AuthContext)
   
    return (
        <SafeAreaView forceInset={{ top: 'always'}} style={styles.root}>
            <Text style={styles.text}>
                AccountScreen
            </Text>
            <Button style={styles.button}
                title="Sign Out"
                onPress={() => signOut((() => navigation.navigate('NotSignedIn')))}
            />
        </SafeAreaView>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    root: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 20
    },
    text: {
        fontSize: 24,
        paddingBottom: 20
    }
})
