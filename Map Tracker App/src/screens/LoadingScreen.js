import { useContext, useEffect } from 'react'
import AuthContext from '../context/AuthContext'

const LoadingScreen = ({ navigation }) => {

    const { trySignIn } = useContext(AuthContext)

    useEffect(() => {
        trySignIn(() => navigation.navigate('SignedIn'), () => navigation.navigate('NotSignedIn'))
    },[navigation])

    return null
}

export default LoadingScreen
