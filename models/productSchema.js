const Schema = require('mongoose').Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  img: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  brand: { type: Schema.Types.ObjectId, ref: 'Brand' },
  price: { type: Number, required: true, default: 0 },
  size: { type: String, required: false, default: 'N/A'},
  description: String
}, {
  timestamps: true
});

module.exports = productSchema;