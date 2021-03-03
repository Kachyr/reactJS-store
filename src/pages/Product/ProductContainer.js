import React from 'react';
import { withRouter } from 'react-router-dom';
import { Product } from './Product.jsx';
import { AddToCartButton } from '../../components/AddToCartButton/AddToCartButton';
import PropTypes from 'prop-types';
import styles from './Product.module.css';
import { selectProduct } from '../../store/reducers/singleProduct/selectors';
import { useSelector } from 'react-redux';
import useGetSingleProduct from './hooks/useGetSingleProduct';

const ProductContainer = ({ match }) => {
  useGetSingleProduct(match.params.productId);

  const product = useSelector(selectProduct);

  return (
    <div className={styles.itemContainer}>
      <Product product={product} />
      <AddToCartButton productID={product.id} />
    </div>
  );
};

export default withRouter(ProductContainer);

ProductContainer.propTypes = {
  match: PropTypes.object
};
