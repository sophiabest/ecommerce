const Schema = require('mongoose').Schema;

const productSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    imageLinks: {thumbnail: {type: String, default: "Unavailiable"}},
    title: {type: String},
    seller: [],
    averageRating: {type:Number, default: 0},
    categories: [],
    description: { type: String, default: 'Unavailiable'},
    condition: {type: String, default: 'Unavailiable'},
    price: {type: Number, default: 0},
}, { timestamps: true });



module.exports = productSchema;