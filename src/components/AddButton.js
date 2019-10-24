import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px; height: 60px;
    border-radius: 50%;
    transition: 0.2s;
    background-image: linear-gradient(
      to bottom right,
      #4845ab,
      #643fa3,
      #793a99,
      #89348f,
      #953084
    );
    :hover {
      cursor: pointer;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
    }
    svg {
        fill: #ffffff;
        width: 30px; height: 30px;
    }
`

const PlusIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.44 31.44">
      <defs />
      <path
        d="M1.12 16.84c-.62 0-1.11-.5-1.11-1.13 0-.62.49-1.1 1.1-1.1H14.6V1.12a1.12 1.12 0 112.24 0V14.6h13.48a1.12 1.12 0 110 2.24H16.83v13.48a1.12 1.12 0 11-2.24 0V16.84H1.12z"
      />
    </svg>
  );
};

const AddButton = ({ event }) => {
  return (
    <Wrapper onClick={event}>
        <PlusIcon />
    </Wrapper>
  );
};

AddButton.propTypes = {
  event: PropTypes.func.isRequired
};

export default AddButton;
