import * as axios from "axios";
import { PRODUCTS } from "./urls";

const instance = axios.create({
  baseURL: process.env.REACT_APP_MAIN_URL_ADDRES,
});

export const productsAPI = {
  getProducts() {
    return instance.get(PRODUCTS).then((response) => response.data);
  },
  getOneProduct(userId) {
    return instance
      .get(`${PRODUCTS}/${userId}`)
      .then((response) => response.data);
  },
};
