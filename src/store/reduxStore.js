import { configureStore } from '@reduxjs/toolkit';
import CreateProductReducer from './reducers/CreateProductModal/CreateProductSlice.js';
import productListReducer from './reducers/productsList/productListSlice.js';

export const store = configureStore({
  reducer: {
    products: productListReducer,
    createProduct: CreateProductReducer
  }
});
