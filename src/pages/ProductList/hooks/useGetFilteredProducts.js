import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { GET_PRODUCT_SAGA } from '../../../store/sagas/actionsForSaga';

const useGetFilteredProducts = () => {
  const dispatch = useDispatch();
  const handleFilter = useCallback(
    (obj) => {
      dispatch({ type: GET_PRODUCT_SAGA, payload: obj });
    },
    [dispatch]
  );
  return { handleFilter };
};
export default useGetFilteredProducts;
