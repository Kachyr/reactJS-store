import React, { useMemo, useReducer } from 'react';
import { productsAPI } from '../api/api.js';
import { AppContext } from './Context.js';
import { productsListReducer } from './reducers/productListReducer.js';
import { ADD_PRODUCT, SET_PRODUCTS } from './reducers/types.js';

export const AppState = ({ children }) => {
  const initState = {
    products: {
      page: 1,
      perPage: 50,
      totalItems: 200,
      items: [
        {
          isEditable: false,
          id: '357d769d-8146-4e2e-845a-b462f0569cbf',
          name: 'Generic Steel Fish',
          price: 143,
          origin: 'asia',
          createdAt: '2020-12-22T17:28:32.126Z',
          updatedAt: '2020-12-22T17:28:32.126Z'
        }
      ]
    }
  };

  const [state, dispatch] = useReducer(productsListReducer, initState);
  let memoid = useMemo(() => {
    console.log('chenged memo');
    return state;
  }, [state]);

  // FOR COUNTING PRODUCTS IN CART
  const setAddedPoroducts = () => {
    let arr = state.products.items.filter((item) => item.isEditable === true);

    return [arr.length, arr.reduce((counter, item) => (item ? counter + item.price : counter), 0)];
  };

  //ACTION CREATORS
  const setProducts = (products) => dispatch({ type: SET_PRODUCTS, products });

  const addOrRemoveProduct = (id) => dispatch({ type: ADD_PRODUCT, id });

  const getProducts = async () => {
    let resp = await productsAPI.getProducts();
    setProducts(resp);
  };
  window.state = state;

  return (
    <AppContext.Provider value={{ state: memoid, getProducts, addOrRemoveProduct, setAddedPoroducts }}>{children}</AppContext.Provider>
  );
};
