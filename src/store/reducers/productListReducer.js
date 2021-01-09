import { ADD_PRODUCT, SET_PRODUCTS } from "./types";

export const productsListReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        products: action.products,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: {
          items: state.products.items.map((prod) => {
            if (prod.id === action.id) {
              return { ...prod, isEditable: !prod.isEditable };
            }
            return prod;
          }),
        },
      };

    default:
      return state;
  }
};
