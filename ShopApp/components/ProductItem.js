import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Paper } from 'material-bread'
import { Title, Paragraph } from 'react-native-paper'
import { Text, Button } from 'react-native-elements'
import { addItemToCart } from '../store/UserSlice'
import { useDispatch } from 'react-redux'

const ProductItem = ({ item, navigation }) => {
    const dispatch = useDispatch()
    return (
        <Paper style={styles.paper} shadow={3}>
            <Image source={{ uri: item.imageUrl }} style={styles.image}/>
            <View style={styles.content}>
                <Title>{ item.title }</Title> 
                <Paragraph>{ item.description} </Paragraph>
            </View>
            <View style={styles.actions}>
                <View>
                    <Text h5 style={styles.price}>$ { item.price } </Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.detailDiv}>
                        <Button 
                            style={styles.detailButton}
                            title="View Detail"
                            type="clear"
                            onPress={() => navigation.navigate('Product',{ item })}
                        />
                    </View>                        
                    <View>
                        <Button
                            title="Add to Cart"
                            type="clear"
                            onPress={() => dispatch(addItemToCart(item))}
                        />
                    </View>
                </View>
            </View>
        </Paper>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    paper: {
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        height: 200,
        width: '100%',
    },
    content: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    divider: {
        marginBottom: 0
    },  
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 20
    },
    price: {
        textAlign: 'center',
        fontSize: 17,
        color: 'black',
        fontWeight: '700',
    },
    buttons: {
        flexDirection: 'row'
    }
})
