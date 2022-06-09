const Product = require('../../models/product');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const products = await Product.find({}).sort('name').populate('category').populate('brand').exec();
  products.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(products);
}

async function show(req, res) {
  const product = await Product.findById(req.params.id);
  res.json(product);
}