// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Product = require('./models/product');
const Category = require('./models/category');
const Brand = require('./models/brand');
const Order = require('./models/order');

let user, product, category, brand, order;
let users, products, categories, brands, orders;