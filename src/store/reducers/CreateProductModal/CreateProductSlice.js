import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  error: null,
  loading: false,
  succeed: false
};
const createProductSlice = createSlice({
  name: 'createProduct',
  initialState,
  reducers: {
    PRODUCTS_LOADING: (state) => {
      state.error = null;
      state.loading = true;
    },
    PRODUCTS_ERROR: (state, action) => {
      alert(action);
      state.loading = false;
      state.error = action.payload;
    },
    PRODUCTS_SUCCESS: (state, action) => {
      console.log(action);
      return { ...state, isOpen: false, succeed: true, loading: false };
    },
    OPEN_MODAL: (state) => {
      state.isOpen = true;
    },
    CLOSE_MODAL: (state) => {
      state.isOpen = false;
    }
  }
});
export const { OPEN_MODAL, CLOSE_MODAL, PRODUCTS_LOADING, PRODUCTS_ERROR, PRODUCTS_SUCCESS } = createProductSlice.actions;

export default createProductSlice.reducer;
