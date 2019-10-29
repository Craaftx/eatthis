import React from "react";
import styled from "styled-components";
import Stars from "./Stars";
import ReviewPropType from "../proptypes/ReviewPropType";

const Wrapper = styled.div`
  margin-bottom: 15px;
`;

const ReviewUser = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ReviewImage = styled.img`
  border-radius: 50%;
  height: 32px;
  width: 32px;
  object-fit: cover;
`;

const ReviewUsername = styled.div`
  flex; 1;
  margin: 0 0 0 10px;
`;

const ReviewDetails = styled.div`
  margin: 0 0 0 0;
`;

const ReviewText = styled.p`
  color: #555;
  font-size: 13px;
  line-height: 1.5;
`;

const StarsWrapper = styled.div`
  margin-left: auto;
`;

const ReviewCard = ({ review }) => {
  return (
    <Wrapper>
      <ReviewUser>
        <ReviewImage src={review.imageUrl} alt={review.name} />
        <ReviewUsername>{review.name}</ReviewUsername>
        <StarsWrapper>
          <Stars number={review.rating} isFulled/>
        </StarsWrapper>
      </ReviewUser>
      <ReviewDetails>
        <ReviewText>{review.text}</ReviewText>
      </ReviewDetails>
    </Wrapper>
  );
};

ReviewCard.propTypes = {
  review: ReviewPropType.isRequired
};

export default ReviewCard;

