require('dotenv').config();
require('./config/database');

const Product = require('./models/productSchema');


(async function() {

  await Product.deleteMany({});
  const products = await Product.create([
    {name: 'Shirts', sortOrder: 100},
    {name: 'Shoes', sortOrder: 200},
    {name: 'Skirts', sortOrder: 300},
    {name: 'Dresses', sortOrder: 400},
    {name: 'Jeans', sortOrder: 500},
    {name: 'SweatPants', sortOrder: 600},
    {name: 'Jackets', sortOrder: 700},
    {name: 'Accessories', sortOrder: 800},
    {name: 'Shorts', sortOrder: 900},
    
  ]);

  console.log(products)

  process.exit();

})();