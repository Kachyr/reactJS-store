import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { productsAPI } from '../../../api/api';
import { PRODUCTS_ERROR, PRODUCTS_LOADING, PRODUCTS_SUCCESS } from '../../../store/reducers/CreateProductModal/CreateProductSlice';

const usePostProduct = () => {
  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    (obj) => {
      dispatch(PRODUCTS_LOADING());
      productsAPI
        .postCreateProduct(obj)
        .then((response) => {
          dispatch(PRODUCTS_SUCCESS(response));
        })
        .catch((error) => dispatch(PRODUCTS_ERROR(error)));
    },
    [dispatch]
  );
  return { handleSubmit };
};
export default usePostProduct;
