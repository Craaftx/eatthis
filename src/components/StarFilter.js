import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Stars from "./Stars";

const Wrapper = styled.div`
  display: inline-block;
  border: 1px solid #eee;
  padding: 5px 10px;
  border-radius: 3px;
`;

const StarsFilter = ({ number }) => {
    return (
        <Wrapper>
            <Stars number={number} />
        </Wrapper>
    );
};

StarsFilter.propTypes = {
  number: PropTypes.number.isRequired,
};

export default StarsFilter;
