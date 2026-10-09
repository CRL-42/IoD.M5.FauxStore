const StoreModel = require('../models/fakeStoreAPI');

const getProducts = async (req, res) => {
    try {
        const products = await StoreModel.getProducts();
        res.json(products);
    }
    catch (err) {
        res.status(500).json({err: 'Failed to get products.'});
    }
};

const getCategories = async (req, res) => {
    try {
        const categories = await StoreModel.getCategories();
        res.json(categories);
    }
    catch (err) {
        res.status(500).json({err: 'Failed to get categories.'});
    }
};

module.exports = {
    getProducts,
    getCategories
};

