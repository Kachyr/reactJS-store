import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  perPage: 50,
  totalItems: 200,
  items: [
    {
      isEditable: false,
      id: '357d769d-8146-4e2e-845a-b462f0569cbf',
      name: 'This is initial state',
      price: 420,
      origin: 'ua',
      createdAt: '2020-12-22T17:28:32.126Z',
      updatedAt: '2020-12-22T17:28:32.126Z'
    }
  ]
};

export const productListSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    SET_PRODUCTS: (state, action) => {
      return action.payload;
    },

    ADD_PRODUCT: (state, action) => {
      const item = state.items.find((obj) => obj.id === action.payload);

      if (item) {
        item.isEditable = !item.isEditable;
      }
    }
    // PRODUCTS_LOADING: (state) => {},
    // PRODUCTS_SUCCESS: (state) => {},
    // PRODUCTS_ERROR: (state) => {}
  }
});

export const { SET_PRODUCTS, ADD_PRODUCT } = productListSlice.actions;
export default productListSlice.reducer;
//ASINC TASK
// export function getAsincProducts() {
//   return async function (dispatch) {
//     dispatch(productListSlice.actions.PRODUCTS_LOADING());

//     try {
//       dispatch(productListSlice.actions.PRODUCTS_SUCCESS(response.url));
//     } catch (err) {
//       dispatch(productListSlice.actions.PRODUCTS_ERROR(err));
//     }
//   };
// }
