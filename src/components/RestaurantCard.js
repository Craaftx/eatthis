import React from "react";
import styled from "styled-components";
import { Stars } from "./Stars";
import placeholder from "../placeholder.jpg"

const Restaurant = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 15px 20px 15px 25px;
  height: 200px;
  box-sizing: border-box;
  align-items: center;
  margin-bottom: 20px;
  transition: 0.2s;
  :hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
  }
`;

const RestaurantDescription = styled.div`
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

const RestaurantImage = styled.img`
  flex: 1
  border-radius: 5px
  height: 160px;
  max-width: 120px;
  object-fit: cover;
`;

const RestaurantRating = styled.div`
  margin: 10px 0;
  small {
    color: #8b86c8;
    margin-left: 5px;
  }
`;

const RestaurantDescriptionFood = styled.div`
  h4 {
    margin: 15px 0 5px 0;
    color: #555;
    font-weight: 500;
    font-size: 0.8rem;
  }
`;

export const RestaurantCard = ({ restaurant }) => {
  return (
    <Restaurant>
      <RestaurantDescription>
        <h3>{restaurant.name}</h3>
        <small>
          {/* TODO: Use Map Quest to get distance (bike, car, walk), see documentation */}
          <i className="lni-direction-alt"></i> 0m de votre position
        </small>
        <RestaurantRating>
          <Stars number={restaurant.rating} />
          <small>{restaurant.reviewCount} avis</small>
        </RestaurantRating>
        <RestaurantDescriptionFood>
          <h4>Mots Clés</h4>
          <span>{restaurant.categories.join(", ")}</span>
        </RestaurantDescriptionFood>
      </RestaurantDescription>
      <RestaurantImage src={restaurant.imageUrl ? restaurant.imageUrl : placeholder} alt={restaurant.name} />
    </Restaurant>
  );
};
