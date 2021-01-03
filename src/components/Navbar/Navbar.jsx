import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../store/Context';
import styles from './Navbar.module.css';

export const Navbar = () => {
  let { setAddedPoroducts } = useContext(AppContext);
  console.log(setAddedPoroducts());
  return (
    <nav className={styles.navbar}>
      <div className={styles.navItem}>
        <h2 className={styles.logo}>Products APP</h2>
      </div>

      <div className={styles.navbarPanel}>
        <div className={styles.navItem}>
          <NavLink className={styles.navLink} to="/" exact>
            <h4>
              <u>Products</u>
            </h4>
          </NavLink>
        </div>
      </div>
      <div className={styles.navCart}>
        <NavLink className={styles.navLinkCart} to="/cart">
          <h4>
            <span>Cart</span>
          </h4>
          <span>Items in cart - {setAddedPoroducts()[0]}</span>
          <hr/>
          <span>Total price is - {setAddedPoroducts()[1]}</span>
        </NavLink>
      </div>
    </nav>
  );
};
