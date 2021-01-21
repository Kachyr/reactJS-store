import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClearCartButton } from '../../components/common/components/ClearCartButton/ClearCartButton';
import { ADD_PRODUCT } from '../../store/reducers/productsList/productListSlice';
import { selectItemsInCart } from '../../store/reducers/productsList/selectors';

import { ListItem } from '../ProductList/ListItem';

export const Cart = () => {
  const dispatch = useDispatch();

  const productListItems = useSelector(selectItemsInCart);
  const addOrRemoveProduct = (id) => dispatch(ADD_PRODUCT(id));
  return (
    <div>
      <ClearCartButton />
      {productListItems.map((item) => {
        return <ListItem key={item.id} product={item} addOrRemoveProduct={addOrRemoveProduct} />;
      })}
    </div>
  );
};
