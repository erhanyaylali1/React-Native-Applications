import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BlogContext from '../context/BlogContext'

const PostScreen = ({ route }) => {
    const { id } = route.params
    const { data } = useContext(BlogContext)
    const post = data.find((item) => item.id === id)


    return (
        <View style={styles.root}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    { post.title }
                </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>
                    { post.content }
                </Text>
            </View>
        </View>
    )
}

export default PostScreen

const styles = StyleSheet.create({
    root: {
        padding: 25,
        paddingHorizontal: 30
    },
    header: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        marginBottom: 10
    },
    body: {
        paddingHorizontal: 20
    },
    text: {
        fontSize: 16,
    }
})
