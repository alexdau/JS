'use strict';
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
products.forEach(sale => {
    sale.price = sale.price - sale.price * 0.15;
    console.log("Цена со скидкой: " + sale.price);
});