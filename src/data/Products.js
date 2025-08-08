const products = [
    {
        id: 1,
        name: 'Cotton Linen Kurta',
        image: 'https://triprindia.com/cdn/shop/files/TGYRNFULSWEAT-PLAIN1_9625fe55-7250-40c8-bd3d-6e32fc4d4f38_1.jpg?v=1741074028',
        images: [
            'https://via.placeholder.com/300x400?text=Cotton+Kurta',
            'https://via.placeholder.com/300x400?text=Cotton+Kurta+Back',
        ],
        price: 799,
        originalPrice: 999,
        badge: 'Sale',
        rating: 4.5,
        reviewCount: 120,
        colors: ['#232323', '#FFD700', '#FAD4C0'],
        sizes: [
            { label: 'S', available: true },
            { label: 'M', available: true },
            { label: 'L', available: false },
        ],
        isFavorite: false,
        inStock: true,
    },
    {
        id: 2,
        name: 'Classic Fit Shirt',
        image: 'https://campussutra.com/cdn/shop/products/Black-and-Brown-Pullover-Hoodie-With-Ribbed-Hem-1.webp?v=1699022953',
        images: [],
        price: 1199,
        originalPrice: null,
        badge: 'New',
        rating: 4.2,
        reviewCount: 80,
        colors: ['#000000', '#FFFFFF'],
        sizes: [
            { label: 'M', available: true },
            { label: 'L', available: true },
        ],
        isFavorite: true,
        inStock: true,
    },
    // Add more products as needed...
];

export default products;
