const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const itemsCtrl = require('../../controllers/api/items');

router.use(ensureLoggedIn);

router.get('/', itemsCtrl.index);
router.get('/:id', itemsCtrl.show);

module.exports = router;