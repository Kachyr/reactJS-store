import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../store/Context';
import styles from './Product.module.css';

export const Product = (props) => {
  const { state, getProducts } = useContext(AppContext);

  useEffect(() => {
    getProducts();
  }, []);

  return <div>Current product</div>;
};
