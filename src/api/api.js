import * as axios from 'axios';
import { PRODUCTS } from './urlsConst';

const instance = axios.create({
  // як тільки дойдуть руки пофікшу лінтер
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_MAIN_URL_ADDRES
});

export const productsAPI = {
  getProducts() {
    return instance.get(PRODUCTS).then((response) => response.data);
  },
  getOneProduct(userId) {
    return instance.get(`${PRODUCTS}/${userId}`).then((response) => response.data);
  },
  getFilteredProducts(page, perPage, origins, minPrice, maxPrice) {
    return instance.get(`${PRODUCTS}/?page=${page}&perPage=${perPage}&origins=${origins}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
  }
};
