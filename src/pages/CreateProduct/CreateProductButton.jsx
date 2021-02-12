import styled from 'styled-components';
import React from 'react';
import { useDispatch } from 'react-redux';
import { OPEN_MODAL } from '../../store/reducers/CreateProductModal/CreateProductSlice';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
`;
const Button = styled.button`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: underline;
  background-color: #333;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #111;
  }
`;

const CreateProductButton = () => {
  const dispatch = useDispatch();

  const openModalHandler = () => {
    dispatch(OPEN_MODAL());
  };

  return (
    <Container>
      <h2>
        <Button onClick={openModalHandler}>Create product</Button>
      </h2>
    </Container>
  );
};
export default CreateProductButton;
