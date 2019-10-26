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
  const numberRounded = Math.round(number);
  const result = [];
  /**
   * @review bon je me doute que c'est en relation avec ton nombre maximum d'étoiles mais en vrai, il vaut mieux éviter ses valeurs magiques (5)
   */
  for (let index = 0; index < 5; index += 1) {
    if (index < numberRounded) {
      result.push(filledStar(index));
    } else {
      const condition = isFulled;
      if(condition) {
        result.push(emptyStar(index));
      }
    }
  }
  return <StarsWrapper>{result}</StarsWrapper>;
};

Stars.propTypes = {
  number: PropTypes.number.isRequired,
  isFulled: PropTypes.bool.isRequired,
};

export default Stars;
