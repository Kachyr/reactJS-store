import React, { useContext } from 'react';
import { AppContext } from '../../store/Context';
import styles from './AddToCartButton.module.css';
import PropTypes from 'prop-types';

export const AddToCartButton = ({ productId, isEditable }) => {
  const { addOrRemoveProduct } = useContext(AppContext);
  const addOrRemoveButton = () => {
    addOrRemoveProduct(productId);
  };
  return (
    <>
      {
        <button className={styles.cartButtonAdd} onClick={addOrRemoveButton}>
          {!isEditable ? 'Add to Cart' : 'Remove from Cart'}
        </button>
      }
    </>
  );
};

AddToCartButton.propTypes = {
  productId: PropTypes.string,
  isEditable: PropTypes.bool
};
