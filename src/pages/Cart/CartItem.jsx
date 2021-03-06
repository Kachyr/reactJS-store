import React from 'react';
import { NavLink } from 'react-router-dom';
import { AddToCartButton } from '../../components/AddToCartButton/AddToCartButton';
import styles from './Cart.module.css';
import PropTypes from 'prop-types';
import { routeTo } from '../../navlinkURLs/routePath';
import { ChengeItemQuantyty } from '../../components/common/components/ChengeItemQuantity/ChengeItemQuantyty';

export const CartItem = ({ product }) => {
  return (
    <div className={styles.itemContainer}>
      <NavLink to={routeTo.PRODUCT + product.id} className={styles.link}>
        Visit product page
      </NavLink>
      <ul>
        <li className={styles.property}>{product.name}</li>
        <li className={styles.property}>{product.origin}</li>
        <li className={styles.property}> Price: {product.price * product.quantity} $</li>
      </ul>
      <ChengeItemQuantyty id={product.id} quantity={product.quantity} />
      <AddToCartButton productId={product.id} />
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    isEditable: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired
  })
};
CartItem.defaultProps = {
  product: PropTypes.shape({
    isEditable: true,
    quantity: 0,
    id: 'string',
    name: 'string',
    price: 0,
    origin: 'europe',
    createdAt: 'string',
    updatedAt: 'string'
  })
};
