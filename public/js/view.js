class StoreView {
    constructor() {
        this.cardList = document.getElementById('card-list');
        this.dropList = document.getElementById('drop-list');
        this.dropdownBtn = document.getElementById('dropdown-btn');
        this.cardTemplate = document.getElementById('card-template');
        this.dropTemplate = document.getElementById('drop-template');
        this.allProductOptions = document.getElementById('all-product-options');
    }

    bindAllProductsClick(handler) {
        this.allProductOptions.addEventListener('click', (e) => {
            e.preventDefault();
            handler();
        });
    }

    setDropdownLable(text) {
        this.dropdownBtn.innerText = text;
    }

    renderProducts(products) {
        this.cardList.innerHTML = '';
        products.forEach(product => {
            const template = this.cardTemplate.content.cloneNode(true);
            template.querySelector('.card-img-top').src = product.image;
            template.querySelector('.card-img-top').alt = product.title;
            template.querySelector('.card-title').innerText = product.title;
            template.querySelector('.card-text').innerText = product.description;
            template.querySelector('.btn-primary').innerText = `add to cart: $${product.price}`;
            this.cardList.appendChild(template);
        });
    }

    renderCategories(categories, onCategorySelect) {
        categories.forEach(category => {
            const template = this.dropTemplate.content.cloneNode(true);
            const item = template.querySelector('.dropdown-item');
            const formatItem = category.charAt(0).toUpperCase() + category.slice(1);

            item.innerText = formatItem;
            item.addEventListener('click', (e) => {
                e.preventDefault();
                onCategorySelect(category, formatItem);
            });

            this.dropList.appendChild(template);
        });
    }
}