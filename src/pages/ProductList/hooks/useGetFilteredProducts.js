import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { PRODUCTS_LOADING } from '../../../store/reducers/productsList/productListSlice';
import { GET_PRODUCT_SAGA } from '../../../store/sagas/actionsForSaga';

const useGetFilteredProducts = () => {
  const dispatch = useDispatch();
  const handleFilter = useCallback(
    (obj) => {
      dispatch(PRODUCTS_LOADING());
      dispatch({ type: GET_PRODUCT_SAGA, payload: obj });
      // productsAPI
      //   .getProducts(obj)
      //   .then((response) => {
      //     dispatch(PRODUCTS_SUCCESS(response));
      //   })
      //   .catch((error) => dispatch(PRODUCTS_ERROR(error)));
    },
    [dispatch]
  );
  return { handleFilter };
};
export default useGetFilteredProducts;
// const useGetFilteredProducts = () => {
//   const dispatch = useDispatch();
//   const handleFilter = useCallback(
//     (obj) => {
//       dispatch(PRODUCTS_LOADING());
//       productsAPI
//         .getProducts(obj)
//         .then((response) => {
//           dispatch(PRODUCTS_SUCCESS(response));
//         })
//         .catch((error) => dispatch(PRODUCTS_ERROR(error)));
//     },
//     [dispatch]
//   );
//   return { handleFilter };
// };
// export default useGetFilteredProducts;
