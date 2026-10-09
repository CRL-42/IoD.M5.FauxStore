document.addEventListener('DOMContentLoaded', () => {
    const model = new ProductModel();
    const view = new StoreView();
    const presenter = new StorePresenter(model, view);

    presenter.init();
});