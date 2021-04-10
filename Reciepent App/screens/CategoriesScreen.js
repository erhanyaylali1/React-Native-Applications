import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import CategoryItem from '../components/CategoryItem'
import { CATEGORIES } from '../data/data'


const CategoriesScreen = ({ navigation }) => {
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={CATEGORIES}
                style={styles.list}
                renderItem={({item}) => <CategoryItem item={item} navigation={navigation} />}                
            />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
    },
})