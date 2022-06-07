const mongoose = require('mongoose');

const productSchema = require('./productSchema');

module.exports = mongoose.model('Product', productSchema);