import { ADD_PRODUCT, SET_PRODUCTS } from './types';

// const initialState ={
//   "isEditable": false,
//   "id": "357d769d-8146-4e2e-845a-b462f0569cbf",
//   "name": "Generic Steel Fish",
//   "price": 143,
//   "origin": "asia",
//   "createdAt": "2020-12-22T17:28:32.126Z",
//   "updatedAt": "2020-12-22T17:28:32.126Z"
//   }

export const productsListReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        products: action.products
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
          })
        },
        
      };

    default:
      return state;
  }
};
