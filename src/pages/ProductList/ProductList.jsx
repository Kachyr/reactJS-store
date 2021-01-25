import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from './ListItem';
import styles from './ProductList.module.css';
import { ProductListForm } from './ProductListForm';

export const ProductList = ({ state }) => {
  return (
    <>
      <ProductListForm />
      <hr />
      <div className={styles.productsContainer}>
        {state.map((item) => {
          return <ListItem key={item.id} product={item} />;
        })}
      </div>
    </>
  );
};
ProductList.propTypes = {
  state: PropTypes.array
};
