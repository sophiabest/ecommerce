const mongoose = require('mongoose');
require ('./category');
require ('./brand');
const productSchema = require('./productSchema');

module.exports = mongoose.model('Product', productSchema);