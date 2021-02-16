import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { OPEN_MODAL } from '../../store/reducers/CreateProductModal/CreateProductSlice';
import { Button, Container } from './styled-components/styledButton';

const CreateProductButton = () => {
  const dispatch = useDispatch();

  const openModalHandler = useCallback(() => {
    dispatch(OPEN_MODAL());
  }, [dispatch]);

  return (
    <Container>
      <h2>
        <Button onClick={openModalHandler}>Create product</Button>
      </h2>
    </Container>
  );
};
export default CreateProductButton;
