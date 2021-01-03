import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://yalantis-react-school-api.yalantis.com/api/v1/'
});

export const productsAPI = {
  getProducts() {
    return instance.get(`products`).then((response) => response.data);
  },
  getOneProduct(userId) {
    return instance.get(`products/${userId}`).then((response) => response.data);
  }
};
