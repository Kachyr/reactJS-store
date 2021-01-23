import React from 'react';
import { useSelector } from 'react-redux';
import { ClearCartButton } from '../../components/common/components/ClearCartButton/ClearCartButton';

import { selectItemsInCart } from '../../store/reducers/selectors';

import { CartItem } from './CartItem';

export const Cart = () => {
  const productListItems = useSelector(selectItemsInCart);

  return (
    <div>
      {productListItems.length ? <ClearCartButton /> : <h2>Cart is empty!</h2>}
      {productListItems.map((item) => {
        return <CartItem key={item.id} product={item} />;
      })}
    </div>
  );
};
