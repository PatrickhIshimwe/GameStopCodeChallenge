export type Order = {
    id: string;
    orderNumber: string;
    date: string;
    completed: boolean;
    dispatcher: string;
    driverNumber: string;
    notes: string;
    customerPO: string;
    pickupInfo: {
        market: string;
        terminal: string;
        supplier: string;
        product: string;
        quantity: string;
        loadingNumber: string;
        customerPONumber: string;
    };
};



export const mockOrders = [
    { 
        id: '1',
        orderNumber: 'ORD001',
        date: '2024-11-01 08:30',
        completed: false,
        dispatcher: 'John Doe',
        driverNumber: 'D12345',
        notes: 'Handle with care',
        customerPO: 'PO67890',
        pickupInfo: { 
            market: 'Market 1',
            terminal: 'Terminal A',
            supplier: 'Supplier X',
            product: 'Product Y',
            quantity: '1000 gallons',
            loadingNumber: 'LN1234',
            customerPONumber: 'CP12345' 
        } 
    },
    { 
        id: '2',
        orderNumber: 'ORD002',
        date: '2024-11-02 10:00',
        completed: false,
        dispatcher: 'Jane Smith',
        driverNumber: 'D67890',
        notes: 'Urgent delivery',
        customerPO: 'PO12345',
        pickupInfo: { 
            market: 'Market 2', 
            terminal: 'Terminal B',
            supplier: 'Supplier Z',
            product: 'Product A',
            quantity: '500 gallons',
            loadingNumber: 'LN5678',
            customerPONumber: 'CP67890'
        } 
    },
    { 
        id: '3',
        orderNumber: 'ORD003',
        date: '2024-11-03 12:00',
        completed: false,
        dispatcher: 'Alice Johnson',
        driverNumber: 'D34567',
        notes: 'Deliver before noon',
        customerPO: 'PO98765',
        pickupInfo: { 
            market: 'Market 3',
            terminal: 'Terminal C',
            supplier: 'Supplier Y',
            product: 'Product B',
            quantity: '2000 gallons',
            loadingNumber: 'LN9012',
            customerPONumber: 'CP54321'
        } 
    }
]