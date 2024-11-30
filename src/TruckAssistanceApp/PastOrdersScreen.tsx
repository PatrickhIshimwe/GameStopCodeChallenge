// src/screens/PastOrdersScreen.tsx

import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { OrderContext } from '../contexts/OrderContext';
import { Order } from '../data/orders';


const PastOrdersScreen: React.FC = () => {
  const { orders } = useContext<any>(OrderContext);

  const pastOrders = orders.filter((order: { completed: any; }) => order.completed);

  const renderItem = ({ item }: { item: Order }) => (
    <View style={styles.orderItem}>
      <Text>{item.orderNumber}</Text>
      <Text>{item.date}</Text>
      <Text>{item.completed}</Text>
    </View>
  );

  return (
    <FlatList
      data={pastOrders}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  orderItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default PastOrdersScreen;
