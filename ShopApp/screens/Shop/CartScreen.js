import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { getCart, getCartAmount } from '../../store/UserSlice'
import { useSelector } from 'react-redux'
import { Paper } from 'material-bread'
import { Button } from 'react-native-elements'
import CardItem from '../../components/CartItem'
import { getCartCount } from '../../store/UserSlice' 
import { Div, Text, Image } from "react-native-magnus"

const CartScreen = ({ navigation }) => {
    
    const cart = useSelector(getCart)
    const length = useSelector(getCartCount)
    const totalAmount = useSelector(getCartAmount)

    return (
        <ScrollView style={styles.container}>
            <Paper style={styles.header} shadow={20}>
                <Text style={styles.total}>Total: </Text>
                <Text style={styles.price}>$ {totalAmount}</Text>
                {length > 0 ? (
                    <View style={styles.checkout}>
                        <Button 
                            title="Checkout"
                            type="clear"
                        />
                    </View>
                ):<></>}
            </Paper>

            <View style={styles.body}>
                {length !== 0 ? (
                    cart.map((item) => <CardItem item={item} key={item.id} navigation={navigation} />)              
                ):(
                    <Paper mt={30} mb={20} style={styles.empty} shadow={10}>
                        <Div flexDir="column" justifyContent="center">
                            <Text fontSize="xl" textAlign="center" mb={10} >
                                There is no Item in Your Cart.
                            </Text>
                            <Button
                                title="Start Shopping"
                                type="clear"
                                onPress={() => navigation.navigate('Products')}
                            />
                        </Div>
                    </Paper>
                )}
            </View>
        </ScrollView>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    total: {
        fontSize: 18
    },
    price: {
        fontSize: 18,
        color: '#f54284',
        fontWeight: 'bold'
    },
    checkout: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1
    },
    body: {
        marginVertical: 40,
        marginHorizontal: 20,
    },
    empty: {
        padding: 20,
        paddingBottom: 10,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 5
    }
})
