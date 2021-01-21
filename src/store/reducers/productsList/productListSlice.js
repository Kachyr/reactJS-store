import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemsInCart: [],
  total: 0,
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
      updatedAt: '2020-12-22T17:28:32.126Z',
      quantity: 0
    }
  ]
};

export const productListSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    SET_PRODUCTS: (state, action) => {
      return { ...state, ...action.payload };
    },

    ADD_PRODUCT: (state, action) => {
      //find the item to push
      const item = state.items.find((obj) => obj.id === action.payload);

      const existedInCard = state.itemsInCart.find((obj) => obj.id === action.payload);
      if (existedInCard) {
        item.quantity++;
      } else {
        item.quantity = 1;
        state.total = state.total + item.price;
        state.itemsInCart.push(item);
      }
    },
    REMOVE_PRODUCT: (state, action) => {
      //find the item to delete
      const item = state.items.find((obj) => obj.id === action.payload);

      state.total -= item.price * item.quantity;
      state.itemsInCart = state.itemsInCart.filter((obj) => obj.id !== action.payload);
    },
    ADD_QUANTITY: (state, action) => {
      const item = state.items.find((obj) => obj.id === action.payload);
      item.quantity++;
      state.total += item.price;
    },
    SUB_QUANTITY: (state, action) => {
      const item = state.items.find((obj) => obj.id === action.payload);
      if (item.quantity === 1) {
        const newItems = state.itemsInCart.filter((obj) => obj.id !== action.payload);
        (state.itemsInCart = newItems), (state.total -= item.price);
      } else {
        item.quantity--;
        state.total -= item.price;
      }
    },
    IN
    // PRODUCTS_LOADING: (state) => {},
    // PRODUCTS_SUCCESS: (state) => {},
    // PRODUCTS_ERROR: (state) => {}
    //,
  }
});

export const { SET_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT } = productListSlice.actions;
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
