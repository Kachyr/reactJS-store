import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productsAPI } from '../../../api/api';
import { PRODUCTS_SUCCESS } from '../../../store/reducers/productsList/productListSlice';

const useGetProducts = async () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(PRODUCTS_LOADING());
    const getProducts = async () => {
      try {
        const response = await productsAPI.getProducts();
        dispatch(PRODUCTS_SUCCESS(response));
      } catch (error) {
        console.log(error);
        // dispatch(PRODUCTS_ERROR(e));
      }
    };
    getProducts();
  }, []);
};
export default useGetProducts;
