import React from "react";
import styled from "styled-components";
import RestaurantPropType from "../proptypes/RestaurantPropType";
import Stars from "./Stars";
import ReviewCard from "./ReviewCard";
import StreetView from "./StreetView";
import FormReview from "./FormReview";
import LocalStorage from "../utils/LocalStorage";
import Review from "../model/Review";
import {
  RestaurantRating,
  RestaurantDescriptionFood,
  RestaurantDescription as unStyledRestaurantDescription,
  RestaurantImage as unStyledRestaurantImage,
  RestaurantHeader,
  RestaurantStreetView,
  RestaurantReviews,
  RestaurantStreetViewWrapper
} from "./Restaurant";
import { SecondaryButton } from "./Buttons";

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

const RestaurantDescription = styled(unStyledRestaurantDescription)`
  flex: none;
  padding: 15px 20px 15px 20px;
  h3 {
    margin: 0 0 5px 0;
    font-family: "Montserrat", sans-serif;
  }
  small {
    color: #888;
  }
`;

const RestaurantImage = styled(unStyledRestaurantImage)`
  flex: none;
  border-radius: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  max-width: 100%;
`;

class RestaurantDetails extends React.PureComponent {
  constructor(props) {
    super(props);

    const { restaurant } = props;
    this.storage = new LocalStorage();

    this.htmlStreetView = React.createRef();
    this.state = {
      streetViewIsDisplay: false,
      updateStreetViewIsDisplay: this.updateStreetViewIsDisplay,
      storedReviews: this.storage.getReviews(restaurant.id)
    };
  }

  updateStoredReviews = () => {
    const { restaurant } = this.props;
    this.setState({ storedReviews: this.storage.getReviews(restaurant.id) });
  };

  updateStreetViewIsDisplay = () => {
    this.setState({ streetViewIsDisplay: true });
  };

  render() {
    const { restaurant } = this.props;
    const {
      streetViewIsDisplay,
      updateStreetViewIsDisplay,
      storedReviews
    } = this.state;
    return (
      <Wrapper>
        <RestaurantHeader>
          <RestaurantImage src={restaurant.imageUrl} alt={restaurant.name} />
          <RestaurantDescription>
            <h3>{restaurant.name}</h3>
            <small>
              <b>{restaurant.displayAddress}</b>
            </small>
            <br />
            <small>{`Prix : ${restaurant.priceLevel}`}</small>
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
        <RestaurantReviews>
          {restaurant.reviews.length > 0 && (
            <>
              <h3>
                Commentaires <small>({restaurant.reviews.length})</small>
              </h3>
              {restaurant.reviews.map(review => (
                <ReviewCard key={review.id} review={review} />
              ))}
              {storedReviews &&
                storedReviews.map(review => {
                  const reviewObject = new Review(review);
                  return (
                    <ReviewCard key={reviewObject.id} review={reviewObject} />
                  );
                })}
            </>
          )}
          <FormReview
            handler={this.updateStoredReviews}
            restaurantId={restaurant.id}
          />
        </RestaurantReviews>
        <RestaurantStreetView>
          <h3>Street View</h3>
          <RestaurantStreetViewWrapper>
            {streetViewIsDisplay ? (
              <StreetView
                latitude={restaurant.latitude}
                longitude={restaurant.longitude}
              />
            ) : (
              <SecondaryButton
                onClick={() => {
                  updateStreetViewIsDisplay();
                }}
                type="button"
              >
                Activer StreetView
              </SecondaryButton>
            )}
          </RestaurantStreetViewWrapper>
        </RestaurantStreetView>
      </Wrapper>
    );
  }
}

export default RestaurantDetails;

RestaurantDetails.propTypes = {
  restaurant: RestaurantPropType.isRequired
};
