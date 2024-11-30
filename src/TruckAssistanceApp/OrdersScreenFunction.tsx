import React, { useContext } from "react";
import { TouchableOpacity, Text, FlatList, StyleSheet, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { OrderContext } from "../contexts/OrderContext";


export default function OrdersScreenFunction({navigation}: StackScreenProps<any>) {

    const { orders } = useContext<any>(OrderContext);
    console.log('orders', orders);



    return(
        <FlatList data={orders}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('OrderDetails', { orderId: item.id })}>
                        <View style={styles.orderItem}>
                                <Text>{item.orderNumber} - Function component</Text>
                                <Text>{item.date}</Text>
                        </View>
                    </TouchableOpacity>
                )}
    />

    )

}

const styles = StyleSheet.create({
    orderItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }

})

