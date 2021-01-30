import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productsAPI } from '../../../api/api';
import { PRODUCTS_ERROR, PRODUCTS_LOADING, PRODUCTS_SUCCESS } from '../../../store/reducers/productsList/productListSlice';

const useGetProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PRODUCTS_LOADING());
    const getProducts = () => {
      productsAPI
        .getProducts()
        .then((response) => {
          dispatch(PRODUCTS_SUCCESS(response));
        })
        .catch((error) => {
          dispatch(PRODUCTS_ERROR(error));
        });
    };
    getProducts();
  }, []);
};
export default useGetProducts;
