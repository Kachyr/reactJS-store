import React, { useMemo, useReducer } from 'react';
import { productsAPI } from '../api/api.js';
import { AppContext } from './Context.js';
import { productsListReducer } from './reducers/productListReducer.js';
import { ADD_PRODUCT, SET_PRODUCTS } from './reducers/types.js';
import PropTypes from 'prop-types';

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
          name: 'This is initial state',
          price: 420,
          origin: 'ua',
          createdAt: '2020-12-22T17:28:32.126Z',
          updatedAt: '2020-12-22T17:28:32.126Z'
        }
      ]
    }
  };

  const [state, dispatch] = useReducer(productsListReducer, initState);

  let memoid = useMemo(() => {
    return state;
  }, [state]);

  // FOR COUNTING PRODUCTS IN CART

  const priceOfProducts = useMemo(() => {
    return state.products.items
      .filter((item) => item.isEditable === true)
      .reduce((counter, item) => (item ? counter + item.price : counter), 0);
  }, [state.products.items]);

  const addedPoroducts = useMemo(() => {
    return state.products.items.filter((item) => item.isEditable === true).length;
  }, [state.products.items]);

  //ACTION CREATORS
  const setProducts = (products) => dispatch({ type: SET_PRODUCTS, products });

  const addOrRemoveProduct = (id) => dispatch({ type: ADD_PRODUCT, id });

  const getProducts = async () => {
    let resp = await productsAPI.getProducts();
    setProducts(resp);
  };

  return (
    <AppContext.Provider
      value={{
        state: memoid,
        getProducts,
        addOrRemoveProduct,
        addedPoroducts,
        priceOfProducts
      }}>
      {children}
    </AppContext.Provider>
  );
};

AppState.propTypes = {
  children: PropTypes.element.isRequired
};
