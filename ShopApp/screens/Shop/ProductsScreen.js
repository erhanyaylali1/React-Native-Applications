import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { getProducts } from '../../store/ProductSlice'
import ProductItem from '../../components/ProductItem'

const ProductsScreen = () => {
    
    const products = useSelector(getProducts)

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem item={item} />}
            />
        </View>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    }
})
