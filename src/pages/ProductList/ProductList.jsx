import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from './ListItem';
import styles from './ProductList.module.css';

export const ProductList = ({ state, addOrRemoveProduct }) => {
  return (
    <div className={styles.productsContainer}>
      {state.map((item) => {
        return <ListItem key={item.id} product={item} addOrRemoveProduct={addOrRemoveProduct} />;
      })}
    </div>
  );
};
ProductList.propTypes = {
  state: PropTypes.array,
  addOrRemoveProduct: PropTypes.func
};
