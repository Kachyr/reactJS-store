import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { POST_PRODUCT_SAGA } from '../../../store/sagas/actionsForSaga';

const usePostProduct = () => {
  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    (obj) => {
      dispatch({ type: POST_PRODUCT_SAGA, payload: obj });
    },
    [dispatch]
  );
  return { handleSubmit };
};
export default usePostProduct;
