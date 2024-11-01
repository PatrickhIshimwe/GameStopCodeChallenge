import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ProductListingPage from './src/pages/ProductListPage'
import ProductDetailPage from './src/pages/ProductDetailPage'
import Cart from './src/pages/Cart'
import Checkout from './src/pages/Checkout'
import {CartProvider} from "./src/contexts/CartContext"

const Stack = createStackNavigator()

export default function App() {
  return (
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ProductList">
            <Stack.Screen name="ProductList" component={ProductListingPage} />
            <Stack.Screen name="ProductDetail" component={ProductDetailPage} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Checkout" component={Checkout} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
  )
}
