import React, { useContext, useEffect } from "react";
import { AppContext } from "../../store/Context";
import { ListItem } from "./ListItem";
import styles from "./ProductList.module.css";

export const ProductList = () => {
  const { state, getProducts, addOrRemoveProduct } = useContext(AppContext);

  useEffect(() => {
    if (state.products.items.length < 2) getProducts();
  }, []);

  return (
    <div className={styles.productsContainer}>
      {state.products.items.map((item) => {
        return (
          <ListItem
            key={item.id}
            product={item}
            addOrRemoveProduct={addOrRemoveProduct}
          />
        );
      })}
    </div>
  );
};
