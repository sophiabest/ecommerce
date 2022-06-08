const Schema = require('mongoose').Schema;

const productSchema = new Schema({
    seller: { type: Schema.Types.ObjectId, ref: 'Seller'},
    imageLinks: [String],
    title: {type: String},
    averageRating: {type:Number, default: 0},
    categories: [String],
    description: { type: String, default: 'Unavailiable'},
    condition: {type: String, default: 'Unavailiable'},
    price: {type: Number, default: 0},
}, { timestamps: true });



module.exports = productSchema;