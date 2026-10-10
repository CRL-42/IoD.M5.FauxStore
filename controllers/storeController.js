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

const filterProducts = async (req, res) => {
    try {
        const category = req.query.category;
        const products = await StoreModel.getProducts();
        
        if (!category || category === 'all') {
            return res.json(products);
        }
        else {
            const filtered = products.filter(product =>
                product.category &&
                product.category.toLowerCase() === String(category).toLowerCase()
            );
            return res.json(filtered);
        }
    }
    catch (err) {
        return res.status(500).json({error: 'Failed to filter products.'});
    }
};

module.exports = {
    getProducts,
    getCategories,
    filterProducts
};

