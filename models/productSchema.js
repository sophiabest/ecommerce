const Schema = require('mongoose').Schema;

const productSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    imageLinks: {thumbnail: {type: String, default: "Unavailiable"}},
    title: {type: String},
    authors: [],
    publisher: {type: String, default: 'Unavailiable'},
    publishedDate: {type: String, default: 'Unavailiable'},
    averageRating: {type:Number, default: 0},
    categories: [],
    description: { type: String, default: 'Unavailiable'},
    condition: {type: String, default: 'Unavailiable'},
    price: {type: Number, default: 0},
}, { timestamps: true });



module.exports = productSchema;