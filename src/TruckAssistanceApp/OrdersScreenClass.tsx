import React from "react";
import { FlatList, TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { mockOrders } from "../data/orders";

export default class OrderScreenClass extends React.Component<any> {

    render() {

        return (
            <FlatList data={mockOrders}
                      keyExtractor={item => item.id}
                      renderItem={({item}) => (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderDetails', { orderId: item.id })} >
                                <View style={styles.orderItem}>
                                    <Text>{item.orderNumber} - class component</Text>
                                    <Text>{item.date}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
            />
        )
    }

}

const styles = StyleSheet.create({
    orderItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }

})
