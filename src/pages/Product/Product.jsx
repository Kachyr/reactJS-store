import PropTypes from 'prop-types';
import React from 'react';
import styles from './Product.module.css';

export const Product = ({ product }) => {
  return (
    <>
      <div>
        <h2>{product.name}</h2>
      </div>
      <ul>
        <li className={styles.property}>{product.origin}</li>
        <li className={styles.property}> Price: {product.price} $</li>
      </ul>
    </>
  );
};
Product.propTypes = {
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
Product.defaultProps = {
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
