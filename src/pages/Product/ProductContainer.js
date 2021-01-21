import React from 'react';
import { withRouter } from 'react-router-dom';
import { Product } from './Product.jsx';
import { AddToCartButton } from '../../components/AddToCartButton/AddToCartButton';
import PropTypes from 'prop-types';
import styles from './Product.module.css';
import { useSingleProduct } from '../../components/common/hooks/useSingleProduct';

const ProductContainer = ({ match }) => {
  // const initialState = {
  //   id: 'string',
  //   name: 'string',
  //   price: 0,
  //   origin: 'europe',
  //   createdAt: 'string',
  //   updatedAt: 'string',
  //   isEditable: true
  // };

  const product = useSingleProduct(match.params.productId);
  // useEffect(() => {
  //   productsAPI.getOneProduct(match.params.productId).then((response) => setstate(response));
  // }, []);

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
