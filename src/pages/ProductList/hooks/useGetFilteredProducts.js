import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { productsAPI } from '../../../api/api';
import { PRODUCTS_ERROR, PRODUCTS_LOADING, PRODUCTS_SUCCESS } from '../../../store/reducers/productsList/productListSlice';

const useGetFilteredProducts = () => {
  const dispatch = useDispatch();
  const handleFilter = useCallback(
    ({ page, perPage, origins, minPrice, maxPrice }) => {
      dispatch(PRODUCTS_LOADING());
      productsAPI
        .getFilteredProducts(page, perPage, origins, minPrice, maxPrice)
        .then((response) => {
          dispatch(PRODUCTS_SUCCESS(response));
        })
        .catch((error) => dispatch(PRODUCTS_ERROR(error)));
    },
    [dispatch]
  );
  return { handleFilter };
};
export default useGetFilteredProducts;
