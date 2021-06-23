class ProductsService {
  constructor() {
    this._http = new HttpService();
  }

  async getProducts() {
    const data = await this._http.fetch('/api/products');

    return data;
  }
}
