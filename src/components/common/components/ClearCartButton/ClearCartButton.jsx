import { useDispatch } from 'react-redux';

import { CLEAR_CART } from '../../../../store/reducers/productsList/productListSlice.js';

export const ClearCartButton = () => {
  const dispatch = useDispatch();
  const clearHendrler = () => dispatch(CLEAR_CART);
  return (
    <div>
      <button onClick={clearHendrler}>Clear Cart</button>
    </div>
  );
};
