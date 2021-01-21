import { useDispatch } from 'react-redux';
import { productsAPI } from '../../../../api/api';
import { SET_PRODUCTS } from '../../../../store/reducers/productsList/productListSlice';

export const ClearCartButton = () => {
  const dispatch = useDispatch();
  const getProducts = async () => {
    const setProducts = (products) => dispatch(SET_PRODUCTS(products));

    let resp = await productsAPI.getProducts();
    setProducts(resp);
  };
  return (
    <div>
      <button onClick={getProducts}>Clear Cart</button>
    </div>
  );
};
