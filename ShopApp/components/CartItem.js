import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Div, Text, Image } from "react-native-magnus"
import { Button } from 'react-native-elements'
import { Paper } from 'material-bread'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart, changeCount } from '../store/UserSlice'

const CartItem = ({ item, navigation}) => {
    const dispatch = useDispatch()
    return (
        <Paper style={styles.container}>
            <Div row alignItems="center">
                <Div>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Product', { item })}
                    >
                        <Image
                            resizeMode="cover"
                            h={130}
                            w={80}
                            borderRadius={5}
                            source={{ uri: item.imageUrl }}
                        />
                    </TouchableOpacity>
                </Div>
                <Div flex={1} ml={25} flexDir="column">
                    <Div>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate('Product', { item })}
                        >
                            <Text fontSize="3xl" fontWeight="bold">
                                { item.title }
                            </Text>
                        </TouchableOpacity>
                    </Div>
                    <Div mt={5}>
                        <Text fontSize={14}>
                            { item.description }
                        </Text>
                    </Div>
                    <Div mt={10} mr={20}>
                        <Text fontSize={15} fontWeight="700" textAlign="right">
                            $ { item.price }
                        </Text>
                    </Div>
                    <Div flexDir="row" mt={10} alignItems="center">
                        <Div flexDir="row" flex={1} alignItems="center">    
                            <Button
                                type="outline"
                                style={styles.buttons}
                                icon={<AntDesign name="minus" size={12} color="black" />}
                                onPress={() => dispatch(changeCount({ item, type: 'dec' }))}
                            />
                            <Text ml={10} mr={10} fontSize="xl" fontWeight="500">
                                { item.count }
                            </Text>
                            <Button
                                type="outline"
                                style={styles.buttons}
                                icon={<AntDesign name="plus" size={12} color="black" />}
                                onPress={() => dispatch(changeCount({ item, type: 'inc'}))}
                            />
                        </Div>
                        <Div mr={10}>
                            <Button
                                type="clear"
                                style={styles.buttons}
                                icon={<MaterialIcons name="delete-outline" size={20} color="black" />}
                                onPress={() => dispatch(deleteItemFromCart(item))}
                            />
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Paper>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 20,
        borderRadius: 20
    },
    buttons: {
        width: 50
    }
})
