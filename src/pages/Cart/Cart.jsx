import React, { useContext } from "react";
import { AppContext } from "../../store/Context";
import { ListItem } from "../ProductList/ListItem";

export const Cart = () => {
  const { state, addOrRemoveProduct } = useContext(AppContext);
  return (
    <div>
      {state.products.items.map((item) => {
        return item.isEditable ? (
          <ListItem
            key={item.id}
            product={item}
            addOrRemoveProduct={addOrRemoveProduct}
          />
        ) : null;
      })}
    </div>
  );
};
