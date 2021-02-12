import { createSlice } from '@reduxjs/toolkit';
import { addQuantity } from '../../helpers';

const initialState = {
  error: null,
  loading: false,
  succeed: false,
  itemsInCart: [],
  page: 1,
  perPage: 50,
  totalItems: 200,
  items: []
};

const productListSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    PRODUCTS_LOADING: (state) => {
      state.error = null;
      state.loading = true;
    },
    PRODUCTS_ERROR: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = action.payload;
    },
    PRODUCTS_SUCCESS: (state, action) => {
      const newItems = addQuantity(action.payload.items);
      return { ...state, ...action.payload, newItems, succeed: true, loading: false };
    },

    ADD_PRODUCT_TO_CART: (state, action) => {
      //find the item to push
      const item = state.items.find((obj) => obj.id === action.payload);
      state.itemsInCart.push(item);
    },
    REMOVE_PRODUCT_FROM_CART: (state, action) => {
      //find the item to delete

      state.itemsInCart = state.itemsInCart.filter((obj) => obj.id !== action.payload);
    },
    ADD_QUANTITY: (state, action) => {
      const item = state.itemsInCart.find((obj) => obj.id === action.payload);
      item.quantity++;
      state.itemsInCart = state.itemsInCart.map((obj) => (obj.id === action.payload ? item : obj));
    },
    SUB_QUANTITY: (state, action) => {
      const item = state.itemsInCart.find((obj) => obj.id === action.payload);
      if (item.quantity < 1) {
        const newItems = state.itemsInCart.filter((obj) => obj.id !== action.payload);
        state.itemsInCart = newItems;
      } else {
        item.quantity--;
      }
    },
    CLEAR_CART: (state) => {
      state.itemsInCart = [];
    }
  }
});

export const {
  PRODUCTS_LOADING,
  PRODUCTS_ERROR,
  PRODUCTS_SUCCESS,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  CLEAR_CART
} = productListSlice.actions;
export default productListSlice.reducer;
