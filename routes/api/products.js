const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const productsCtrl = require('../../controllers/api/products');

router.use(ensureLoggedIn);

// router.post('/search', productsCtrl.search);
router.post('/add', productsCtrl.addProduct);
router.get('/', productsCtrl.index);
router.get('/listings', productsCtrl.getListings);
router.put('/edit', productsCtrl.updateListings);
router.delete('/delete', productsCtrl.deleteListings);

module.exports = router;