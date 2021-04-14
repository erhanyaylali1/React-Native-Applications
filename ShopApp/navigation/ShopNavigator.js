
import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { Entypo } from '@expo/vector-icons';
import ProductsScreen from '../screens/Shop/ProductsScreen'
import CartScreen from '../screens/Shop/CartScreen'
import { useSelector } from 'react-redux'
import { getCartCount } from '../store/UserSlice' 
import { Button, Badge } from 'react-native-elements'
import ProductDetailScreen from '../screens/Shop/ProductDetailScreen';


const Stack = createStackNavigator()

const ShopNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Products" 
            screenOptions={{
                gestureDirection: "horizontal",
                gestureEnabled: true,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <Stack.Screen
                name="Products"
                component={ProductsScreen}
                options={({ navigation }) => ({
                    headerTitle: 'Products',
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <React.Fragment>
                            <Button
                                type="clear"
                                icon={<Entypo name="shopping-cart" size={24} color="black" />}
                                onPress={() => navigation.navigate('Cart')}
                            />
                            <Badge 
                                value={useSelector(getCartCount)} 
                                containerStyle={{ position: 'absolute', top: 5, right: 0}}
                            />
                        </React.Fragment>
                    ),
                    headerRightContainerStyle: {
                        marginRight: 20
                    }
                })}
            />
            <Stack.Screen
                name="Product"
                component={ProductDetailScreen}
                options={({ route, navigation }) => ({
                    headerTitle: route.params.item.title,
                    headerRight: () => (
                        <React.Fragment>
                            <Button
                                type="clear"
                                icon={<Entypo name="shopping-cart" size={24} color="black" />}
                                onPress={() => navigation.navigate('Cart')}
                            />
                            <Badge 
                                value={useSelector(getCartCount)} 
                                containerStyle={{ position: 'absolute', top: 5, right: 0}}
                            />
                        </React.Fragment>
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