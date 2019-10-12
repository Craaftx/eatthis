import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 10;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100%;
  padding: 5vh 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-image: linear-gradient(
    to bottom,
    #4845ab,
    #643fa3,
    #793a99,
    #89348f,
    #953084
  );
`;

const MenuItem = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: transparent;
  transition: background-color 0.2s;
  cursor: pointer;
  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #cccccc;
    font-size: 30px;
  }
  &:hover {
    background-color: #2a2051;
    i {
      color: #ffffff;
    }
  }
`;

export const Menu = ({ elements }) => {
  return (
    <Wrapper>
      {elements &&
        elements.map((element, index) => (
          <MenuItem key={index}>
            <i className={element.icon} />
          </MenuItem>
        ))}
    </Wrapper>
  );
};
