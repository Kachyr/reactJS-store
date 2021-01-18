import React, { useEffect } from 'react';

import { selectProductList } from '../../store/reducers/productsList/selectors';

import { ProductList } from './ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { productsAPI } from '../../api/api';
import { ADD_PRODUCT, SET_PRODUCTS } from '../../store/reducers/productsList/productListSlice';
export const ProductListContainer = () => {
  const dispatch = useDispatch();
  const productListItems = useSelector(selectProductList);
  //ACTION CREATORS

  const setProducts = (products) => dispatch(SET_PRODUCTS(products));

  const addOrRemoveProduct = (id) => dispatch(ADD_PRODUCT(id));

  const getProducts = async () => {
    let resp = await productsAPI.getProducts();
    setProducts(resp);
  };
  useEffect(() => {
    if (productListItems.length < 2) getProducts();
  }, []);

  return <ProductList state={productListItems} addOrRemoveProduct={addOrRemoveProduct} />;
};
