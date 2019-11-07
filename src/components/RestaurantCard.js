import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Stars from "./Stars";
import RestaurantPropType from "../proptypes/RestaurantPropType";
import { RestaurantRating, RestaurantDescriptionFood, RestaurantDescription, RestaurantImage } from "./Restaurant"

const Wrapper = styled.div`
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

class RestaurantCard extends React.Component {
  constructor(props) {
    super(props);
    this.htmlStreetView = React.createRef();
  }

  render() {
    const { event, restaurant } = this.props;
    return (
      <Wrapper onClick={event}>
        <RestaurantDescription>
          <h3>{restaurant.name}</h3>
          <small>
            {/* TODO: Use Map Quest to get distance (bike, car, walk), see documentation */}
            <i className="lni-direction-alt" /> 0m de votre position
          </small>
          <small>{` - ${restaurant.priceLevel}`}</small>
          <RestaurantRating>
            <Stars number={restaurant.rating} isFulled />
            <small>{restaurant.reviewCount} avis</small>
          </RestaurantRating>
          <RestaurantDescriptionFood>
            <h4>Mots Clés</h4>
            <span>{restaurant.categories.join(", ")}</span>
          </RestaurantDescriptionFood>
        </RestaurantDescription>
        <RestaurantImage src={restaurant.imageUrl} alt={restaurant.name} />
      </Wrapper>
    );
  }
}

RestaurantCard.propTypes = {
  restaurant: RestaurantPropType.isRequired,
  event: PropTypes.func.isRequired
};

export default RestaurantCard;
