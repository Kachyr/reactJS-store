import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL } from '../../store/reducers/CreateProductModal/CreateProductSlice';
import { selectModalIsOpen } from '../../store/reducers/CreateProductModal/selectors';
import CreateProduct from './CreateProduct';
import ReactDOM from 'react-dom';

const CreateProductContainer = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectModalIsOpen);

  const closeModalHandler = useCallback(() => {
    dispatch(CLOSE_MODAL());
  }, [dispatch]);

  return ReactDOM.createPortal(
    <CreateProduct isOpen={isOpen} closeModalHandler={closeModalHandler} />,
    document.getElementById('modal-root')
  );
};
export default CreateProductContainer;
