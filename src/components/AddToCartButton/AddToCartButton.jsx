import React from 'react';
import styles from './AddToCartButton.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from '../../store/reducers/productsList/productListSlice';
import { useItemFlag } from '../common/hooks/useItemFlag';

export const AddToCartButton = ({ productId }) => {
  const dispatch = useDispatch();

  const addHendler = () => {
    dispatch(ADD_PRODUCT_TO_CART(productId));
  };
  const removeHendler = () => {
    dispatch(REMOVE_PRODUCT_FROM_CART(productId));
  };
  return (
    <>
      {
        <button className={styles.cartButtonAdd} onClick={useItemFlag(productId) ? removeHendler : addHendler}>
          {!useItemFlag(productId) ? 'Add to Cart' : 'Remove from Cart'}
        </button>
      }
    </>
  );
};

AddToCartButton.propTypes = {
  productId: PropTypes.string
};
