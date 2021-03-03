import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: {},

  error: null,
  loading: false,
  succeed: false
};
const productSlice = createSlice({
  name: 'singleProduct',
  initialState,
  reducers: {
    SINGLE_PRODUCT_LOADING: (state) => {
      state.error = null;
      state.loading = true;
    },
    SINGLE_PRODUCT_ERROR: (state, action) => {
      alert(action);
      state.loading = false;
      state.error = action.payload;
    },
    SINGLE_PRODUCT_SUCCESS: (state, action) => {
      return { ...state, product: action.payload, succeed: true, loading: false };
    }
  }
});
export const { SINGLE_PRODUCT_LOADING, SINGLE_PRODUCT_ERROR, SINGLE_PRODUCT_SUCCESS } = productSlice.actions;

export default productSlice.reducer;
