const products = [
    {
        id: 1,
        name: 'Cotton Linen Kurta',
        image: 'https://triprindia.com/cdn/shop/files/TGYRNFULSWEAT-PLAIN1_9625fe55-7250-40c8-bd3d-6e32fc4d4f38_1.jpg?v=1741074028',
        description: 'Premium soft linen/cotton blend. Perfect for summer!',
        images: [
            'https://via.placeholder.com/400x500?text=Kurta+Front',
            'https://via.placeholder.com/400x500?text=Kurta+Back'
        ], // fallback images
        price: 799,
        originalPrice: 999,
        badge: 'Sale',
        rating: 4.5,
        reviewCount: 120,
        sizes: [
            {label: 'S', available: true},
            {label: 'M', available: true},
            {label: 'L', available: false},
        ],
        colors: [
            {
                name: 'Blue',
                value: '#232323',
                images: [
                    'https://m.media-amazon.com/images/I/71rESG2AAKL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/71R0F7vxYxL._UY1000_.jpg',
                    'https://m.media-amazon.com/images/I/81sU7E+BExL._AC_SL1500_.jpg'
                ]
            },
            {
                name: 'Peach',
                value: '#FAD4C0',
                images: [
                    'https://m.media-amazon.com/images/I/716dnSqJnEL._UY1000_.jpg',
                    'https://m.media-amazon.com/images/I/61KancjvgWL._UY1000_.jpg'
                ]
            }
        ],
        inStock: true,
        reviews: [
            {user: 'Aditi', rating: 5, text: 'Lovely fabric and fit!', date: '2025-07-01'},
            {user: 'Rahul', rating: 4, text: 'Good quality, decent price.', date: '2025-07-03'},
            {user: 'Aditi', rating: 5, text: 'Lovely fabric and fit!', date: '2025-07-01'},
            {user: 'Rahul', rating: 4, text: 'Good quality, decent price.', date: '2025-07-03'},
            {user: 'Aditi', rating: 5, text: 'Lovely fabric and fit!', date: '2025-07-01'},
            {user: 'Rahul', rating: 4, text: 'Good quality, decent price.', date: '2025-07-03'},
        ],
        relatedProductIds: [2, 3],
        category: "Apparel",
    },
    {
        id: 2,
        name: 'Classic Fit Shirt',
        image: 'https://campussutra.com/cdn/shop/products/Black-and-Brown-Pullover-Hoodie-With-Ribbed-Hem-1.webp?v=1699022953',
        images: [
            'https://via.placeholder.com/400x500?text=Kurta+Front',
            'https://via.placeholder.com/400x500?text=Kurta+Back'
        ],
        price: 1199,
        originalPrice: null,
        badge: 'New',
        rating: 4.2,
        reviewCount: 80,
        colors: [
            {
                name: 'Blue',
                value: '#232323',
                images: [
                    'https://campussutra.com/cdn/shop/products/Black-and-Brown-Pullover-Hoodie-With-Ribbed-Hem-1.webp?v=1699022953',
                    'https://m.media-amazon.com/images/I/71R0F7vxYxL._UY1000_.jpg',
                    'https://m.media-amazon.com/images/I/81sU7E+BExL._AC_SL1500_.jpg'
                ]
            },
            {
                name: 'Peach',
                value: '#FAD4C0',
                images: [
                    'https://m.media-amazon.com/images/I/716dnSqJnEL._UY1000_.jpg',
                    'https://campussutra.com/cdn/shop/products/Black-and-Brown-Pullover-Hoodie-With-Ribbed-Hem-1.webp?v=1699022953'
                ]
            }
        ],
        sizes: [
            {label: 'M', available: true},
            {label: 'L', available: true},
        ],
        isFavorite: true,
        inStock: true,
        category: "Apparel"
    },
    {
        id: 3,
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
            {label: 'S', available: true},
            {label: 'M', available: true},
            {label: 'L', available: false},
        ],
        isFavorite: false,
        inStock: true,
        category: "Apparel"
    },
    {
        id: 4,
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
            {label: 'M', available: true},
            {label: 'L', available: true},
            {label: 'XL', available: true},
        ],
        isFavorite: true,
        inStock: true,
        category: "Apparel"
    },
    {
        id: 5,
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
            {label: 'S', available: true},
            {label: 'M', available: true},
            {label: 'L', available: false},
        ],
        isFavorite: false,
        inStock: true,
        category: "Apparel"
    },
    {
        id: 6,
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
            {label: 'S', available: true},
            {label: 'M', available: true},
            {label: 'L', available: false},
        ],
        isFavorite: false,
        inStock: true,
        category: "Apparel"
    }
    // Add more products as needed...
];

export default products;
