import React, { useContext } from 'react';
import { AppContext } from '../../store/Context';
import styles from './AddToCartButton.module.css';

export const AddToCartButton = ({ product }) => {
  const {  addOrRemoveProduct } = useContext(AppContext);
  return (
    <>
      {!product.isEditable ? (
        <button className={styles.cartButtonAdd} onClick={() => addOrRemoveProduct(product.id)}>
          Add to Cart
        </button>
      ) : (
        <button className={styles.cartButtonAdd} onClick={() => addOrRemoveProduct(product.id)}>
          Remove from Cart
        </button>
      )}
    </>
  );
};
