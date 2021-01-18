import { configureStore } from '@reduxjs/toolkit';
import productListReducer from './reducers/productsList/productListSlice.js';

export const store = configureStore({
  reducer: {
    products: productListReducer
  }
});
