import React, { useContext } from 'react';
import { AppContext } from '../../store/Context';
import { ListItem } from '../ProductList/ListItem';

export const Cart = (props) => {
  const { state, addOrRemoveProduct } = useContext(AppContext);
  return (
    <div>
      {state.products.items.map((item) => {
        if (item.isEditable) return <ListItem key={item.id} product={item} addOrRemoveProduct={addOrRemoveProduct} />;
        else return null;
      })}
    </div>
  );
};
