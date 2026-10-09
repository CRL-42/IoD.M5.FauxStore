class StorePresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAllProductsClick(() => this.handleFilterAll());
    }

    async init() {
        try {
            const [products, categories] = await Promise.all([
                this.model.getProducts(),
                this.model.getCategories()
            ]);

            this.view.renderProducts(products);
            this.view.renderCategories(categories, (category, formattedName) => {
                this.handleCategorySelect(category, formattedName);
            });
        }
        catch (err) {
            console.error('Error loading store:', err);
        }
    }

    handleFilterAll() {
        this.view.setDropdownLable('All Products');
        const products = this.model.getFilteredProducts('all');
        this.view.renderProducts(products);
    }

    handleCategorySelect(category, formattedName) {
        this.view.setDropdownLable(formattedName);
        const filtered = this.model.getFilteredProducts(category);
        this.view.renderProducts(filtered);
    }
}