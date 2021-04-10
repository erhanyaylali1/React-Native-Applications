import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    
    return (
        <View style={styles.root}>
            <Feather 
                name="search" 
                size={30} 
                onPress={onTermSubmit}
            />
            <TextInput 
                placeholder="Search"
                style={styles.input}      
                autoCapitalize="none"
                autoCorrect={false}  
                value={term}
                onChangeText={onTermChange}   
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    root : {
        backgroundColor: '#EEE',
        height: 50,
        borderRadius: 25,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginVertical: 10
    },
    input: {
        flex: 1,
        borderWidth: 0,
        height: '80%',
        marginLeft: 10,
        fontSize: 18
    }
})
