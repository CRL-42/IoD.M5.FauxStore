const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/products', storeController.getProducts);
router.get('/categories', storeController.getCategories);

module.exports = router;