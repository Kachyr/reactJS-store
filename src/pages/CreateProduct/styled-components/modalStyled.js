import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

export const Background = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalWrapper = styled.div`
  width: 400px;
  height: 250px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: absolute;
  z-index: 1000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormItemWrapper = styled.div`
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
`;

export const СloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 1000;
`;
export const ErrorDiv = styled.div`
  color: red;
`;
