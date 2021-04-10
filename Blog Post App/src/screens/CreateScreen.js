import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import PostForm from '../components/PostForm'
import BlogContext from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const { addPost } = useContext(BlogContext)

    const onAddHandler = () => {
        addPost(title, content, () => navigation.navigate('Home'))
        
    }

    return (
        <View>
            <PostForm 
                title={title}
                setTitle={setTitle}
                content={content}
                setContent={setContent}
                onSubmit={onAddHandler}
                action="ADD POST"
            />
            
        </View>
    )
}

export default CreateScreen

const styles = StyleSheet.create({})
