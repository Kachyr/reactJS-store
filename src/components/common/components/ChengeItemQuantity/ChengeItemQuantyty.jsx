import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_QUANTITY, SUB_QUANTITY } from '../../../../store/reducers/productsList/selectors';
export const ChengeItemQuantyty = ({id, quantity}) => {
  
  const dispatch = useDispatch();
  const increment = dispatch(ADD_QUANTITY(id));
  const decrement = dispatch(SUB_QUANTITY(id));
  id ? (
    <div>
      <button onClick={increment}>-</button>
      <input type="number" value={quantity}/>
      <button onClick={decrement}>-</button>
    </div>
  ) : null;
};
ChengeItemQuantyty.PropTypes = {
  id: PropTypes.string
};
