import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: 1.6px solid transparent;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: black;
    border: 1.6px solid black;
    transition: all 0.35s ease-in-out;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1.6px solid black;
  transition: none;
`;
