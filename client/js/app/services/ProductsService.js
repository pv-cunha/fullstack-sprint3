class ProductsService {
  constructor() {
    this._http = new HttpService();
  }

  getProducts() {
    return this._http
      .get('/api/products')
      .then((products) => {
        return products;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}
