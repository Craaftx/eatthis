import styled from "styled-components";

export const PrimaryButton = styled.button`
  box-sizing: border-box;
  margin: 1rem 0;
  padding: 10px 15px;
  background-color: #4845ab;
  border: 2px solid #4845ab;
  border-radius: 4px;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  font-familly: inherit;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    background-color: #312e96;
  }
`;

export const SecondaryButton = styled.button`
  box-sizing: border-box;
  margin: 1rem 0;
  padding: 10px 15px;
  background-color: transparent;
  border: 2px solid #4845ab;
  border-radius: 4px;
  color: #4845ab;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  font-familly: inherit;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    background-color: #4845ab;
    color: #ffffff;
  }
`;

export const TertiaryButton = styled.button`
  box-sizing: border-box;
  margin: 1rem 0;
  padding: 0px;
  background-color: transparent;
  border: 0;
  border-radius: 4px;
  color: #4845ab;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  font-familly: inherit;
  cursor: pointer;
`;
