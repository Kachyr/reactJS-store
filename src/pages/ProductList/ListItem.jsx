import React from 'react';
import { NavLink } from 'react-router-dom';
import { AddToCartButton } from '../../components/AddToCartButton/AddToCartButton';
import styles from './ProductList.module.css';

export const ListItem = ({ product, addOrRemoveProduct }) => {
  return (
    <div className={styles.itemContainer}>
      <NavLink to={'/product/' + product.id} className={styles.link}>
        Visit product page
      </NavLink>
      <ul>
        <li className={styles.property}>{product.name}</li>
        <li className={styles.property}>{product.origin}</li>
        <li className={styles.property}> Price: {product.price} $</li>
      </ul>

      <AddToCartButton product={product} />
    </div>
  );
};
//
