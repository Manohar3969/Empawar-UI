// src/data/orders.js
export const orders = [
    {
        id: 'ORD123',
        date: '2025-08-01',
        status: 'Delivered',
        total: 2499,
        deliveryStages: [
            { label: 'Order Placed', date: '2025-08-01', completed: true },
            { label: 'Processing', date: '2025-08-02', completed: true },
            { label: 'Shipped', date: '2025-08-03', completed: true },
            { label: 'Delivered', date: '2025-08-04', completed: true }
        ],
        items: [
            {
                name: 'Blue Cotton Shirt',
                qty: 1,
                price: 1299,
                img: 'https://via.placeholder.com/60'
            },
            {
                name: 'Black Jeans',
                qty: 1,
                price: 1200,
                img: 'https://via.placeholder.com/60'
            }
        ],
        shippingAddress: "221B Baker Street, London",
        paymentMethod: "Credit Card (**** 4242)"
    },
    {
        id: 'ORD124',
        date: '2025-08-05',
        status: 'Shipped',
        total: 1500,
        deliveryStages: [
            { label: 'Order Placed', date: '2025-08-05', completed: true },
            { label: 'Processing', date: '2025-08-06', completed: true },
            { label: 'Shipped', date: '2025-08-07', completed: true },
            { label: 'Delivered', date: '', completed: false }
        ],
        items: [
            {
                name: 'Printed Summer Dress',
                qty: 1,
                price: 1500,
                img: 'https://via.placeholder.com/60'
            }
        ],
        shippingAddress: "742 Evergreen Terrace, Springfield",
        paymentMethod: "UPI (john@upi)"
    }
];
