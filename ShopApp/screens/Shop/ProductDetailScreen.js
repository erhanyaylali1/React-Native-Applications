import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Image, Button } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/UserSlice'
import { FontAwesome5 } from '@expo/vector-icons'


const ProductDetailScreen = ({ navigation, route }) => {
    const item = route.params.item
    const dispatch = useDispatch()
    
    return (
        <View>
            <Image 
                style={styles.image}
                source={{ uri: item.imageUrl }}
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>
                <View style={styles.sellerView}>
                    <Text>
                        Seller Id: {item.ownerId}
                    </Text>
                </View>
                <View style={styles.priceView}>
                    <Text style={styles.price}>
                        Price: <Text style={styles.dollar}>${item.price}</Text>
                    </Text>
                </View>
                <Button 
                    title="Add to Cart"
                    buttonStyle={{ marginBottom: 10 }}
                    icon={<FontAwesome5 name="cart-plus" size={18} color="white" style={styles.addToCartIcon} />}
                    
                    onPress={() => dispatch(addItemToCart(item))}
                />
                <Button 
                    type="clean"
                    title="View Cart"
                    onPress={() => navigation.navigate('Cart')}
                />
            </View>
        </View>
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginVertical: 15,
        fontSize: 26,
        fontWeight: '700',
    },
    image: {
        height: 350,
        resizeMode: 'contain',
        width: '100%'
    },
    content: {
        paddingHorizontal: 25
    }, 
    description: {
        fontSize: 16,
    },
    sellerView: {
        marginVertical: 10,
    },
    priceView: {
        marginTop: 10,
        marginBottom: 30,
        width: '100%'
    },
    price: {
        textAlign: 'center',
        fontSize: 18,
        color: '#555'
    },
    dollar: {
        fontWeight: '700',
        color: '#555'
    },
    addToCartIcon: {
        position: 'absolute',
        left: '30%'
    }
})
