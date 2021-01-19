import React from 'react';
import { NavLink } from 'react-router-dom';
import { AddToCartButton } from '../../components/AddToCartButton/AddToCartButton';
import styles from './ProductList.module.css';
import PropTypes from 'prop-types';
import { routeTo } from '../../navlinkURLs/routePath';

export const ListItem = ({ product }) => {
  return (
    <div className={styles.itemContainer}>
      <NavLink to={routeTo.PRODUCT + product.id} className={styles.link}>
        Visit product page
      </NavLink>
      <ul>
        <li className={styles.property}>{product.name}</li>
        <li className={styles.property}>{product.origin}</li>
        <li className={styles.property}> Price: {product.price} $</li>
      </ul>

      <AddToCartButton productId={product.id} />
    </div>
  );
};

ListItem.propTypes = {
  product: PropTypes.shape({
    isEditable: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired
  })
};
ListItem.defaultProps = {
  product: PropTypes.shape({
    isEditable: true,
    id: 'string',
    name: 'string',
    price: 0,
    origin: 'europe',
    createdAt: 'string',
    updatedAt: 'string'
  })
};
