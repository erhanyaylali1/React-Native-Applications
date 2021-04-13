
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Entypo } from '@expo/vector-icons';
import ProductsScreen from '../screens/Shop/ProductsScreen'
import CartScreen from '../screens/Shop/CartScreen'
import { Button } from 'react-native-elements'

const Stack = createStackNavigator()

const ShopNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Products" 
        >
            <Stack.Screen
                name="Products"
                component={ProductsScreen}
                options={({ navigation, route }) => ({
                    headerTitle: 'Products',
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <Button
                            type="clear"
                            icon={<Entypo name="shopping-cart" size={24} color="black" />}
                        />
                    ),
                    headerRightContainerStyle: {
                        marginRight: 20
                    }
                })}
            />
            <Stack.Screen
                name="Cart"
                component={CartScreen}
            />
        </Stack.Navigator>
    )
}

export default ShopNavigator