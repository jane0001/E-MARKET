const PRODUCTS = [
    {
        id: 100,
        name: 'Blouse',
        price: 10.00,
        color: "Red and Blue",
        size: 41,
        image: require('../assets/a.jpg'),
        description: 'Long sleeve blouse'
    },
    {
        id: 101,
        name: 'Pilover',
        price: 11.00,
        color: 'Green',
        size: 50,
        image: require('../assets/b.jpg'),
        description: 'Long sleeve pilover.'
    },
    {
        id: 102,
        name: 'Fluffy',
        price: 8.00,
        color: 'Orange',
        size: 90,
        image: require('../assets/dress8.jpg'),
        description: 'Straight dress'
    },
    {
        id: 103,
        name: 'Suit',
        price: 10.00,
        color: 'Ash',
        size: 42,
        image: require('../assets/f.jpg'),
        description: 'Cotton fabric.'
    },
    {
        id: 104,
        name: 'Gown',
        price: 10.00,
        color: 'Red-Orange',
        size: 41,
        image: require('../assets/dress1.jpg'),
        description: 'Long Straight Gown.'
    },
    {
        id: 105,
        name: 'Satin',
        price: 10.00,
        color: 'Blue',
        size: 40,
        image: require('../assets/dress2.jpg'),
        description: 'Long Straight dress.'
    },
    {
        id: 106,
        name: 'Africa Wear',
        price: 10.00,
        color: 'Multicoloured',
        size: 40,
        image: require('../assets/dress3.jpg'),
        description: 'Fitting long dress'
    },
    {
        id: 107,
        name: 'Jam Suit',
        price: 8.00,
        color: 'Orange',
        size: 39,
        image: require('../assets/c.jpg'),
        description: 'Trouser Long jam suit.'
    },
    {
        id: 108,
        name: 'Boot',
        price: 10.00,
        color: 'Brown',
        size: 40.5,
        image: require('../assets/h.jpg'),
        description: 'Leather Boot.'
    },
    {
        id: 109,
        name: 'Sleeve Top',
        price: 10.00,
        color: 'Blue',
        size: 41,
        image: require('../assets/i.jpg'),
        description: 'Long sleeves.'
    },
    {
        id: 110,
        name: 'Foxy',
        price: 10.00,
        color: 'Brown',
        size: 41,
        image: require('../assets/g.jpg'),
        description: 'Straight Dress'
    },
    {
        id: 111,
        name: 'Darling',
        price: 10.00,
        color: 'yello',
        size: 41,
        image: require('../assets/dress11.jpg'),
        description: 'Short straight dress'
    },
    {
        id: 112,
        name: 'Satin',
        price: 10.00,
        color: 'Wine',
        size: 42,
        image: require('../assets/dress4.jpg'),
        description: 'Long Straight dress'
    },
    {
        id: 113,
        name: 'Skirt and Top',
        price: 10.00,
        color: 'Yellow and Brown',
        size: 40,
        image: require('../assets/m.jpg'),
        description: 'Short Skirt with long Top.'
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}