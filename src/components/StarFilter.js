import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Stars from "./Stars";

const Wrapper = styled.div`
  display: inline-block;
  border: 1px solid #eee;
  padding: 5px 10px;
  margin: 5px 5px 0 0;
  border-radius: 3px;
  cursor: pointer;
`;

const StarsFilter = ({ number, event }) => {
    return (
        <Wrapper onClick={event}>
            <Stars isFulled={false} number={number} />
        </Wrapper>
    );
};

StarsFilter.propTypes = {
  number: PropTypes.number.isRequired,
  event: PropTypes.func.isRequired,
};

export default StarsFilter;
