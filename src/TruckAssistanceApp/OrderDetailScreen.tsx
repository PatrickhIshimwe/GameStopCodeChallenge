import React, { useContext } from "react";
import { View, Text, StyleSheet, Button} from 'react-native'
import { OrderContext } from "../contexts/OrderContext";

// @ts-ignore
export default function OrderDetailScreen({route, navigation}) {

    const { orderId } = route.params
    const { orders, setOrders } = useContext<any>(OrderContext);
    const order = orders.find((order: { id: any; }) => order.id === orderId)

    const markAsCompleted = () => {
        if (order) {
            setOrders((prevOrders: any[]) =>
                prevOrders.map(order =>
                    order.id === orderId ? { ...order, completed: true } : order
                )
            );

            navigation.navigate('PastOrders');

        }
    }

    if (!order) return null;

    return (
        <View style={styles.container}>
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Order Details</Text>
            <Text>Dispatcher: {order.dispatcher}</Text>
            <Text>Driver Number: {order.driverNumber}</Text>
            <Text>Notes: {order.notes}</Text>
            <Text>Customer PO: {order.customerPO}</Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pickup Info</Text>
            <Text>Market: {order.pickupInfo.market}</Text>
            <Text>Terminal: {order.pickupInfo.terminal}</Text>
            <Text>Supplier: {order.pickupInfo.supplier}</Text>
            <Text>Product: {order.pickupInfo.product}</Text>
            <Text>Quantity: {order.pickupInfo.quantity}</Text>
            <Text>Loading Number: {order.pickupInfo.loadingNumber}</Text>
            <Text>Customer PO Number: {order.pickupInfo.customerPONumber}</Text>
        </View>
        <Button title="Mark as Completed" onPress={markAsCompleted} />

    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})
