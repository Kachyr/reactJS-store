import { useSelector } from 'react-redux';
import { selectProductList } from '../../../store/reducers/productsList/selectors';

export const useSingleProduct = (id) => {
  const itemsInCart = useSelector(selectProductList);
  return itemsInCart.find((obj) => obj.id === id);
};
