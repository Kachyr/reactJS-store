import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_PRODUCT } from '../../store/reducers/productsList/productListSlice';
import { selectProductList } from '../../store/reducers/productsList/selectors';

import { ListItem } from '../ProductList/ListItem';

export const Cart = () => {
  const dispatch = useDispatch();

  const productListItems = useSelector(selectProductList);
  const addOrRemoveProduct = (id) => dispatch(ADD_PRODUCT(id));
  return (
    <div>
      {productListItems.map((item) => {
        return <ListItem key={item.id} product={item} addOrRemoveProduct={addOrRemoveProduct} />;
      })}
    </div>
  );
};
