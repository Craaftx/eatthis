import styled from "styled-components";

export const RestaurantDescription = styled.div`
  flex: 2;
  padding-right: 10px;
  h3 {
    margin: 0 0 5px 0;
    font-family: "Montserrat", sans-serif;
  }
  small {
    color: #888;
  }
`;

export const RestaurantImage = styled.img`
  flex: 1;
  border-radius: 5px;
  height: 160px;
  max-width: 100px;
  object-fit: cover;
`;

export const RestaurantRating = styled.div`
  margin: 10px 0;
  small {
    color: #8b86c8;
    margin-left: 5px;
  }
`;

export const RestaurantDescriptionFood = styled.div`
  h4 {
    margin: 15px 0 5px 0;
    color: #555;
    font-weight: 500;
    font-size: 0.8rem;
  }
  span {
    text-transform: capitalize;
  }
`;


export const RestaurantHeader = styled.div`
  width: 100%;
`;

export const RestaurantStreetView = styled.div`
  padding: 15px 20px 15px 20px;
  border-top: 1px solid #efefef;
`;

export const RestaurantReviews = styled.div`
  padding: 15px 20px 15px 20px;
  border-top: 1px solid #efefef;
`;

export const RestaurantStreetViewWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 240px;
  z-index: 2;
  background-image: linear-gradient(
    to right top,
    #fbfbfb,
    #fafafc,
    #f9f9fd,
    #f7f9fe,
    #f4f8ff
  );
`;