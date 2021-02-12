import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { routeTo } from '../../navlinkURLs/routePath';
import { addedPoroducts, priceOfProducts } from '../../store/reducers/productsList/selectors';
import CreateProductButton from '../../pages/CreateProduct/CreateProductButton.jsx';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const productsInCart = useSelector(addedPoroducts);
  const price = useSelector(priceOfProducts);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navItem}>
        <h2 className={styles.logo}>Products APP</h2>
      </div>

      <div className={styles.navbarPanel}>
        <div className={styles.navItem}>
          <NavLink className={styles.navLink} to={routeTo.HOME_PRODUCTS_LIST} exact>
            <h4>Products</h4>
          </NavLink>
        </div>
        <div>
          <CreateProductButton />
        </div>
      </div>
      <div className={styles.navCart}>
        <NavLink className={styles.navLinkCart} to={routeTo.CART}>
          <h4>
            <span>Cart</span>
          </h4>
          <span>Items in cart - {productsInCart}</span>
          <hr />
          <span>Total price is - {price} $</span>
        </NavLink>
      </div>
    </nav>
  );
};
