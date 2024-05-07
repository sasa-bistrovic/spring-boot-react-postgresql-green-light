import http from "../http-common";

if (window.location.protocol === 'http:') {
  http.defaults.baseURL = 'http://localhost:8080/api';
}

if (window.location.protocol !== 'http:') {
  http.defaults.baseURL = 'https://localhost:8080/api';
}

class ProductDataService {
  getAll() {
    return http.get("/products");
  }

  get(id) {
    return http.get(`/products/${id}`);
  }

  create(data) {
    return http.post("/products", data);
  }

  update(id, data) {
    return http.put(`/products/${id}`, data);
  }

  delete(id) {
    return http.delete(`/products/${id}`);
  }

  deleteAll() {
    return http.delete(`/products`);
  }

  findByName(name) {
    return http.get(`/products?name=${name}`);
  }

}

export default new ProductDataService();