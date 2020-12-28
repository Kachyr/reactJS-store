import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.navbarLogo}>
      <h2>Birthday App</h2>
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
          <u>Cart</u>
        </h4>
      </NavLink>
    </div>
  </nav>
);
