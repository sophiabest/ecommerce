const mongoose = require('mongoose');

const bookSchema = require('./bookSchema');

module.exports = mongoose.model('Book', bookSchema);