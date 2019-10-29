import React from "react";
import styled from "styled-components";
import RestaurantPropType from "../proptypes/RestaurantPropType";
import Stars from "./Stars";
import ReviewCard from "./ReviewCard";
import StreetView from "./StreetView";
import FormReview from "./FormReview";

const Wrapper = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  box-sizing: border-box;
  margin-bottom: 20px;
  transition: 0.2s;
  :hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
  }
`;

const RestaurantDescription = styled.div`
  padding: 15px 20px 15px 20px;
  h3 {
    margin: 0 0 5px 0;
    font-family: "Montserrat", sans-serif;
  }
  small {
    color: #888;
  }
`;

const RestaurantImage = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 160px;
  width: 100%;
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

const RestaurantHeader = styled.div`
  width: 100%;
`;

const RestaurantStreetView = styled.div`
  padding: 15px 20px 15px 20px;
  border-top: 1px solid #efefef;
`;

const RestaurantReviews = styled.div`
  padding: 15px 20px 15px 20px;
  border-top: 1px solid #efefef;
`;

const StreetViewWrapper = styled.div`
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

const StreetViewActivate = styled.button`
  color: #fff;
  box-sizing: border-box;
  margin: 1rem auto;
  padding: 10px 15px;
  text-align: center;
  border: 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  font-familly: inherit;
  background: transparent;
  color: #4845ab;
  border: 2px solid #4845ab;
  cursor: pointer;
`;

class RestaurantDetails extends React.Component {
  constructor(props) {
    super(props);
    this.htmlStreetView = React.createRef();
    this.state = {
      streetViewIsDisplay: false,
      updateStreetViewIsDisplay: this.updateStreetViewIsDisplay
    };
  }

  updateStreetViewIsDisplay = () => {
    this.setState({ streetViewIsDisplay: true });
  };

  render() {
    const { restaurant } = this.props;
    const { streetViewIsDisplay, updateStreetViewIsDisplay } = this.state;
    return (
      <Wrapper>
        <RestaurantHeader>
          <RestaurantImage src={restaurant.imageUrl} alt={restaurant.name} />
          <RestaurantDescription>
            <h3>{restaurant.name}</h3>
            <small>
              {/* TODO: Use Map Quest to get distance (bike, car, walk), see documentation */}
              <i className="lni-direction-alt" />
              0m de votre position
            </small>
            <RestaurantRating>
              <Stars number={restaurant.rating} isFulled />
              <small>{restaurant.reviewCount} avis</small>
            </RestaurantRating>
            <RestaurantDescriptionFood>
              <h4>Mots Clés</h4>
              <span>{restaurant.categories.join(", ")}</span>
            </RestaurantDescriptionFood>
          </RestaurantDescription>
        </RestaurantHeader>
        {restaurant.reviews && (
          <RestaurantReviews>
            <h3>
              Commentaires <small>({restaurant.reviews.length})</small>
            </h3>
            {restaurant.reviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
            <FormReview restaurantId={restaurant.id} />
          </RestaurantReviews>
        )}
        <RestaurantStreetView>
          <h3>Street View</h3>
          <StreetViewWrapper>
            {streetViewIsDisplay ? (
              <StreetView
                latitude={restaurant.latitude}
                longitude={restaurant.longitude}
              />
            ) : (
              <StreetViewActivate
                onClick={() => {
                  updateStreetViewIsDisplay();
                }}
                type="button"
              >
                Activer StreetView
              </StreetViewActivate>
            )}
          </StreetViewWrapper>
        </RestaurantStreetView>
      </Wrapper>
    );
  }
}

export default RestaurantDetails;

RestaurantDetails.propTypes = {
  restaurant: RestaurantPropType.isRequired
};
