const Product = require('../../models/product');
// var fetch = require("node-fetch");
const product = require('../../models/productSchema');

module.exports = {
  addProduct,
  index,
  getListings,
  updateListings,
  deleteListings
}

async function deleteListings(req, res) {
  const products = await Product.findByIdAndDelete(req.body.id);
  res.json(products);
}

async function updateListings(req, res) {
  const product = await Product.findByIdAndUpdate(req.body.id, req.body.product, { new: true });
  res.json(product);
}

async function getListings(req, res) {
  const products = await Product.find({ user: req.user._id }).exec();
  res.json(products);
}

async function index(req, res) {
  const products = await Product.find({}).exec();
  res.json(products);
}

async function addProduct(req, res) {
  try {
    req.body.user = req.user._id;
    const product = await Product.create(req.body.volumeInfo);
    res.json(product);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function search(req, res) {
  const response = await fetch(
    `'https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US', options`
  )
    .then(res => {
      if (res.ok) return res.json()
      throw new Error('bad call')
    })
    .then(products => {
      res.json(products)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};