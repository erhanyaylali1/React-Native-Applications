import React,{ useContext, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import BlogContext from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const HomeScreen = ({ navigation }) => {

    const { data, deletePost, getPosts } = useContext(BlogContext)

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <View styles={styles.root}>
            <Text style={styles.title}>
                Posts
            </Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Post',{ id: item.id, title: item.title })}>
                        <View style={styles.row} animat>
                            <Text style={styles.postTitle}>{item.title}</Text>
                            <TouchableOpacity onPress={() => deletePost(item.id)}>
                                <Feather name="trash" style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    root: {
        padding: 20
    },
    buttonContainer: {
        paddingHorizontal: 20
    },  
    addPostButton: {
        marginBottom: 15,
        backgroundColor: 'transparent'
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        margin: 20
    },
    row: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    postTitle: {
        fontSize: 18,
    },
    icon: {
        fontSize: 20
    }
})
