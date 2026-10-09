const axios = require('axios');

class StoreModel {
  constructor() {
    this.apiUrl = 'https://fakestoreapi.com';
  }

  async getProducts() {
    const response = await axios.get(`${this.apiUrl}/products`);
    return response.data;
  }

  async getCategories() {
    const response = await axios.get(`${this.apiUrl}/products/categories`);
    return response.data;
  }
}

module.exports = new StoreModel();