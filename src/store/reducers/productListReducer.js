import { ADD_PRODUCT, SET_PRODUCTS, REMOVE_PRODUCT } from './types';

export const productsListReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.data
      };
    case ADD_PRODUCT:
      return {
        ...state,
      };
    case REMOVE_PRODUCT:
      return {
        ...state
      };
    default:
      return state;
  }
};
