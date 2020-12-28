import React, { useReducer, useState } from 'react';
import { productsAPI } from '../api/api.js';
import { AppContext } from './Context.js';
import { productsListReducer } from './reducers/productListReducer.js';
import { SET_PRODUCTS } from './reducers/types.js';

export const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(productsListReducer);

  const setProducts = (products) => dispatch({ type: SET_PRODUCTS, products });

  const getProducts = () => {
    let prod = productsAPI.getProducts();
    setProducts(prod);
  };

  return <AppContext.Provider value={{ state, getProducts }}>{children}</AppContext.Provider>;
};
