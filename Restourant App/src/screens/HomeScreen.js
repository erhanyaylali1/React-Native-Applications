import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const HomeScreen = () => {

    const [term, setTerm] = useState('')
    const [fetchResults, results, error, loading] = useResults()

    const getResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price
        })
    }

    const renderLists = () => {
        
        if(loading){
            return <Text style={styles.loading}>Loading...</Text>
        }

        if(!results.length) {
            return (
                <Text style={styles.loading}>
                    No Results Found.
                </Text>
            )
        } 

        return (
            <View style={styles.lists}>
                <ResultsList 
                    title="Cost Effective"
                    results={getResultsByPrice('₺')}             
                />
                <ResultsList 
                    title="Bit Pricier"
                    results={getResultsByPrice('₺₺')}
                />
                <ResultsList 
                    title="Big Spender"
                    results={getResultsByPrice('₺₺₺')}
                />
            </View>
        )                     
    }

    return (
        <ScrollView style={styles.root}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => fetchResults(term)}
            />
            {error ? (<Text>{error}</Text>):renderLists()}                        
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    root: {
        paddingTop: 10,
        backgroundColor: 'white',
        flex: 1,
    },
    lists: {
        flex: 1,
        marginBottom: 10
    },
    loading: {
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})

