class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._productsList = new Bind(
      new ProductsList(),
      new ProductsView($('#products')),
      'add',
    );

    this._alert = new Bind(
      new Alert(),
      new AlertView($('#alertView')),
      'message',
    );

    this.allProducts();
  }

  allProducts() {
    const productsService = new ProductsService();
    productsService
      .getProducts()
      .then((products) => {
        products.forEach((product) => {
          this._productsList.add(
            this._addProduct(product.image, product.description, product.value),
          );
        });
      })
      .catch((error) => (this._alert.message = error));
  }

  _addProduct(image, description, value) {
    return new Product(image, description, value);
  }
}
