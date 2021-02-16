import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
`;

export const Button = styled.button`
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
