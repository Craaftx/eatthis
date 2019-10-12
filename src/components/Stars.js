import React from "react";
import styled from "styled-components";

const StarsWrapper = styled.div`
  display: inline-block;
  i {
    color: #65359b;
    margin: 0 3px;
  }
`;

const filledStar = key => <i key={key} className="lni-star-filled"></i>;
const emptyStar = key => <i key={key} className="lni-star"></i>;

export const Stars = ({ number }) => {
  const numberRounded = Math.round(number);
  let result = [];
  for (let index = 0; index < 5; index++) {
    if (index < numberRounded) {
      result.push(filledStar(index));
    } else {
      result.push(emptyStar(index));
    }
  }
  return <StarsWrapper>{result}</StarsWrapper>;
};
