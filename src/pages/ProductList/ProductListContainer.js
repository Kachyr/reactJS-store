import React from 'react';

import { selectProductList } from '../../store/reducers/productsList/selectors';

import { ProductList } from './ProductList';
import { useSelector } from 'react-redux';

import useGetProducts from '../../components/common/hooks/useGetProducts';
export const ProductListContainer = () => {
  const productListItems = useSelector(selectProductList);

  //ACTION CREATORS

  useGetProducts();

  return <ProductList state={productListItems} />;
};
