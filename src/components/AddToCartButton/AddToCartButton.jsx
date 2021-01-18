import React from 'react';
import styles from './AddToCartButton.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT } from '../../store/reducers/productsList/productListSlice';

export const AddToCartButton = ({ productId, isEditable }) => {
  const dispatch = useDispatch();
  const addOrRemoveProduct = (id) => dispatch(ADD_PRODUCT(id));

  const addOrRemoveProductHendler = () => {
    addOrRemoveProduct(productId);
  };
  return (
    <>
      {
        <button className={styles.cartButtonAdd} onClick={addOrRemoveProductHendler}>
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
