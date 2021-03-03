import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_SINGLE_PRODUCT_SAGA } from '../../../store/sagas/actionsForSaga';

const usePostProduct = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_SINGLE_PRODUCT_SAGA, payload: id });
  }, []);
};
export default usePostProduct;
