import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { productsAPI } from '../../api/api';
import { AddToCartButton } from '../../components/AddToCartButton/AddToCartButton';
import PropTypes from 'prop-types';
import styles from './Product.module.css';

const Product = ({ match }) => {
  const initialState = {
    id: 'string',
    name: 'string',
    price: 0,
    origin: 'europe',
    createdAt: 'string',
    updatedAt: 'string',
    isEditable: true
  };

  const [state, setstate] = useState(initialState);
  useEffect(() => {
    productsAPI.getOneProduct(match.params.productId).then((response) => setstate(response));
  }, []);

  return (
    <div className={styles.itemContainer}>
      <div>
        <h2>{state.name}</h2>
      </div>
      <ul>
        <li className={styles.property}>{state.origin}</li>
        <li className={styles.property}> Price: {state.price} $</li>
      </ul>
      <AddToCartButton productID={state.id} />
    </div>
  );
};

export default withRouter(Product);

Product.propTypes = {
  match: PropTypes.object
};
