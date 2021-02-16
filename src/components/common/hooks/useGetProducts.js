import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PRODUCTS_LOADING } from '../../../store/reducers/productsList/productListSlice';
import { GET_PRODUCT_SAGA } from '../../../store/sagas/actionsForSaga';

const useGetProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PRODUCTS_LOADING());
    dispatch({ type: GET_PRODUCT_SAGA });
  }, []);
};
export default useGetProducts;
