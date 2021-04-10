import React from 'react'
import { StyleSheet, TextInput, Text, View, Button } from 'react-native'


const PostForm = ({ title, setTitle, content, setContent, onSubmit, action }) => {

    

    return (
        <View style={styles.root}>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>Enter Content</Text>
            <TextInput 
                style={styles.input}
                placeholder="Content"
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button 
                title={action}
                onPress={onSubmit}
            />              
        </View>
    )
}

export default PostForm

const styles = StyleSheet.create({
    root: {
        padding: 25
    },
    input: {
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 30
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
    }
})
