import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StarsWrapper = styled.div`
  display: inline-block;
  i {
    color: #65359b;
    margin: 0 3px;
  }
`;

const filledStar = key => <i key={key} className="lni-star-filled" />;
const emptyStar = key => <i key={key} className="lni-star" />;

const Stars = ({ number, isFulled }) => {
  const Star = Object.freeze({ min: 0, max: 5, step: 1 });
  const numberRounded = Math.round(number);
  const result = [];
  for (let index = Star.min; index < Star.max; index += Star.step) {
    if (index < numberRounded) {
      result.push(filledStar(index));
    } else {
      const condition = isFulled;
      if (condition) {
        result.push(emptyStar(index));
      }
    }
  }
  return <StarsWrapper>{result}</StarsWrapper>;
};

Stars.propTypes = {
  number: PropTypes.number.isRequired,
  isFulled: PropTypes.bool.isRequired
};

export default Stars;
