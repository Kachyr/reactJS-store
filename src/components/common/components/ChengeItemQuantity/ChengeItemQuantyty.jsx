import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ADD_QUANTITY, SUB_QUANTITY } from '../../../../store/reducers/productsList/productListSlice';

// eslint-disable-next-line react/prop-types
export const ChengeItemQuantyty = ({ id, quantity }) => {
  const dispatch = useDispatch();

  const increment = useCallback(() => dispatch(ADD_QUANTITY(id)), [id]);
  const decrement = useCallback(() => dispatch(SUB_QUANTITY(id)), [id]);
  return id ? (
    <div>
      <button onClick={decrement}>-</button>
      <span> {quantity} </span>
      <button onClick={increment}>+</button>
    </div>
  ) : null;
};
ChengeItemQuantyty.propTypes = {
  id: PropTypes.string,
  quantity: PropTypes.number
};
