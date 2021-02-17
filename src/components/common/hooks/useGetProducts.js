import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { GET_PRODUCT_SAGA } from '../../../store/sagas/actionsForSaga';

const useGetProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // For this function: if you do not pass any params you should pass empty object {}
    dispatch({ type: GET_PRODUCT_SAGA, payload: {} });
  }, []);
};
export default useGetProducts;
