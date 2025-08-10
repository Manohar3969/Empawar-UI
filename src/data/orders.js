// src/data/orders.js
export const orders = [
    {
        id: 'ORD123',
        date: '2025-08-01',
        status: 'Delivered',
        total: 2499,
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
        ]
    },
    {
        id: 'ORD124',
        date: '2025-08-05',
        status: 'Shipped',
        total: 1500,
        items: [
            {
                name: 'Printed Summer Dress',
                qty: 1,
                price: 1500,
                img: 'https://via.placeholder.com/60'
            }
        ]
    }
];
