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
    PRODUCT_LOADING: (state) => {
      state.error = null;
      state.loading = true;
    },
    PRODUCT_ERROR: (state, action) => {
      alert(action);
      state.loading = false;
      state.error = action.payload;
    },
    PRODUCT_SUCCESS: (state) => {
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
export const { OPEN_MODAL, CLOSE_MODAL, PRODUCT_LOADING, PRODUCT_ERROR, PRODUCT_SUCCESS } = createProductSlice.actions;

export default createProductSlice.reducer;
