import React, { useEffect, useContext, useState } from 'react'
import { StyleSheet, Text, View, ToastAndroid } from 'react-native'
import BlogContext from '../context/BlogContext'
import PostForm from '../components/PostForm'

const EditScreen = ({ route, navigation }) => {

    const { id } = route.params
    const { data, updatePost } = useContext(BlogContext)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        const post = data.find((item) => item.id === id)
        setTitle(post.title)
        setContent(post.content)
    },[])

    const onEditHandler = async () => {
        updatePost(id, title, content, () => navigation.goBack())        
    }

    return (
        <View>
            <Text>
                Edit Post #{id}
            </Text>
            <PostForm
                title={title}
                setTitle={setTitle}
                content={content}
                setContent={setContent}
                onSubmit={onEditHandler}
                action="SAVE POST"
            />
        </View>
    )
}

export default EditScreen

const styles = StyleSheet.create({})
