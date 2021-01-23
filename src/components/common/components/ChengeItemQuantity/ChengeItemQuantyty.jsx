import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ADD_QUANTITY, SUB_QUANTITY } from '../../../../store/reducers/productsList/productListSlice';

// eslint-disable-next-line react/prop-types
export const ChengeItemQuantyty = ({ id, quantity }) => {
  const dispatch = useDispatch();

  const increment = () => dispatch(ADD_QUANTITY(id));
  const decrement = () => dispatch(SUB_QUANTITY(id));
  return id ? (
    <div>
      <button onClick={increment}>+</button>
      <p>{quantity}</p>
      <button onClick={decrement}>-</button>
    </div>
  ) : null;
};
ChengeItemQuantyty.propTypes = {
  id: PropTypes.string,
  quantity: PropTypes.number
};
