import * as axios from 'axios';
import { PRODUCTS } from './urlsConst';

export const apiRequest = (method, url, data, params) => {
  return axios({
    // eslint-disable-next-line no-undef
    baseURL: process.env.REACT_APP_MAIN_URL_ADDRES,
    method,
    url,
    data,
    params,
    headers: {
      // eslint-disable-next-line no-undef
      Authorization: process.env.REACT_APP_TOKEN
    }
  });
};

export const productsAPI = {
  getProducts(page, perPage, origins, minPrice, maxPrice) {
    return apiRequest('get', PRODUCTS, null, { page, perPage, origins, minPrice, maxPrice }).then((response) => response.data);
  },
  postCreateProduct(obj) {
    return apiRequest('post', PRODUCTS, { product: obj }).then((response) => response.data);
  }
};
