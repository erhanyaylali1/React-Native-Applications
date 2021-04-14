import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { getProducts } from '../../store/ProductSlice'
import ProductItem from '../../components/ProductItem'
import { Div } from 'react-native-magnus'

const ProductsScreen = ({ navigation }) => {
    
    const products = useSelector(getProducts)

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={products}
                renderItem={({ item }) => <ProductItem item={item} navigation={navigation} />}
            />
        </View>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    flatList: {
        paddingVertical: 20,
    }
})
