import { useSelector } from 'react-redux';
import { selectItemsInCart } from '../../../store/reducers/productsList/selectors';

export const useItemFlag = (id) => {
  const itemsInCart = useSelector(selectItemsInCart);
  return itemsInCart.find((obj) => obj.id == id);
};
