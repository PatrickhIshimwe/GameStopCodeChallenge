import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ProductListingPage from './src/pages/ProductListPage'
import ProductDetailPage from './src/pages/ProductDetailPage'
import Cart from './src/pages/Cart'
import Checkout from './src/pages/Checkout'
import {CartProvider} from "./src/contexts/CartContext"
import { OrderProvider } from './src/contexts/OrderContext'
import OrdersScreenFunction from './src/TruckAssistanceApp/OrdersScreenFunction'
import OrderScreenClass from './src/TruckAssistanceApp/OrdersScreenClass'
import OrderDetailScreen from './src/TruckAssistanceApp/OrderDetailScreen'
import PastOrdersScreen from './src/TruckAssistanceApp/PastOrdersScreen'
import Countries from "./src/TruckAssistanceApp/Countries";
import FollowAlong from "./src/InterviewPreps/FollowAlong";

const Stack = createStackNavigator()

export default function App() {
  return (
      <CartProvider>
        <OrderProvider>
          <NavigationContainer>
              <Stack.Navigator initialRouteName="FollowAlong">
              {/*<Stack.Screen name="Countries" component={Countries} />*/}
              <Stack.Screen name="FollowAlong" component={FollowAlong} />
              <Stack.Screen name="OrderFunction" component={OrdersScreenFunction} />
                <Stack.Screen name="PastOrders" component={PastOrdersScreen} />
                <Stack.Screen name="ProductList" component={ProductListingPage} />
                <Stack.Screen name="ProductDetail" component={ProductDetailPage} />
                <Stack.Screen name="OrderScreenClass" component={OrderScreenClass} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name='OrderDetails' component={OrderDetailScreen} />
                <Stack.Screen name="Checkout" component={Checkout} />
              </Stack.Navigator>
            </NavigationContainer>
        </OrderProvider>
      </CartProvider>
  )
}
