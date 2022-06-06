const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: 'Name is required',
            unique: true
        }, 
        image: {
            type: String,
            require: 'Image is required'
        },
        brand: { 
            type: String, 
            required: 'Brand is required'
        }, 
        category: {
            type: String,
            required: 'Category is required'
        },
        description: {
            type: String,
            required: 'Description is required'
        },
        price: { 
            type: Number, 
            required: 'Price is required'
        }, 
        countInStock: { 
            type: Number, 
            required: 'CountInStock is required'
        }, 
        rating: { 
            type: Number, 
            required: 'Rating is required'
        }, 
        numReviews: { 
            type: Number, 
            required: 'Number of Review is required'
        }, 
    }, 
    {
        timestamps: true
    }
);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;