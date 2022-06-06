const Item = require('../../models/item');
var fetch = require("node-fetch");
const item = require('../../models/itemSchema');
const API_KEY = process.env.API_KEY;

module.exports = {
  search,
  addItem,
  index,
  getListings,
  updateListings,
  deleteListings
}

async function deleteListings(req, res) {
  const items = await Item.findByIdAndDelete(req.body.id);
  res.json(items);
}

async function updateListings(req, res) {
  const item = await Item.findByIdAndUpdate(req.body.id, req.body.item, { new: true });
  res.json(item);
}

async function getListings(req, res) {
  const items = await Item.find({ user: req.user._id }).exec();
  res.json(items);
}


async function index(req, res) {
  const items = await Item.find({}).exec();
  res.json(items);
}

async function addItem(req, res) {
  try {
    req.body.user = req.user._id;
    const item = await Item.create(req.body.volumeInfo);
    res.json(item);

  } catch (err) {
    res.status(400).json(err);
  }
}

async function search(req, res) {
  const response = await fetch(
    ``
  )
    .then(res => {
      if (res.ok) return res.json()
      throw new Error('bad call')
    })
    .then(items => {
      res.json(items)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};