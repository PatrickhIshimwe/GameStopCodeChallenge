// src/context/OrderContext.tsx

import React, { createContext, useState, ReactNode } from 'react';

import { mockOrders, Order } from '../data/orders';


interface OrderContextProps {
  orders: Order[];
  setOrders: (orders: Order[]) => void;
}

interface OrderProviderProps {
  children: ReactNode;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>(mockOrders);

  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContext, OrderProvider };




