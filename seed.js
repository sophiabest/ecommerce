require('dotenv').config();
require('./config/database');

const Category = require('./models/category');

// Pattern:  IIFE
(async function () {

    await Category.deleteMany({});
    const categories = await Category.create([
        { name: 'Dresses' },
        { name: 'Shirts' },
        { name: 'Shorts' },
        { name: 'Jackets' },
        { name: 'Coats' },
        { name: 'Hoodies' },
        { name: 'Jumpsuits' },
        { name: 'Skirts' },
        { name: 'Loungewear' },
        { name: 'Leggings' },
        { name: 'Jeans' },
        { name: 'Joggers' },
        { name: 'Sportswear' },
    ]);

    console.log(categories)

    process.exit();

})();