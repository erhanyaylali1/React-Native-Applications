import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import RestourantCard from '../components/RestourantCard'

const ResultsList = ({ title, results }) => {

    const navigation = useNavigation()    
    if(!results.length) return null
    return (
        <View style={styles.root}>
            <Text style={styles.title}>{ title }</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Restourant Detail',  { id: item.id, name: item.name })}
                        >
                            <RestourantCard 
                                restourant={item}
                            />
                        </TouchableOpacity>
                    )
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default ResultsList

const styles = StyleSheet.create({
    root: {
        marginBottom: 20
    },
    title: {
        marginLeft: 15,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
})
