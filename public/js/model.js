class ProductModel {
    constructor() {
        this.products = [];
        this.categories = [];
    }

    async getProducts() {
        const response = await axios.get('/api/products');
        this.products = response.data;
        return this.products;
    }

    async getCategories() {
        const response = await axios.get('/api/categories');
        this.categories = response.data;
        return this.categories;
    }

    getFilteredProducts(category) {
        if (category === 'all')
            return this.products;
        else
            return this.products.filter(p => p.category === category)
    }
}