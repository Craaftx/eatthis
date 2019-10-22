import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Restaurant from "../model/Restaurant";
import RestaurantCard from "./RestaurantCard";
import RestaurantDetails from "./RestaurantDetails";
import MyContext from "../utils/MyContext";
import marker from "../marker.png";
import StarFilter from "./StarFilter";

const Wrapper = styled.div`
  z-index: 10;
  position: absolute;
  right: -20px;
  top: 0;
  padding: 5vh 5vw 0vh 20px;
  width: 400px;
  height: 100vh;
  overflow-y: auto;
`;

const ResultsTitle = styled.h2`
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
`;

const ResultsFilter = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  padding: 15px 10px 15px 25px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.filters = {
      default: () => {
        return true;
      },
      stars:  number => element => element.rating === number
    };
    this.state = {
      currentRestaurant: null,
      currentFilter: this.filters.default,
      updateCurrentFilter: this.updateCurrentFilter,
      updateCurrentRestaurant: this.updateCurrentRestaurant
    };
  }

  updateCurrentFilter = currentFilter => {
    this.setState({ currentFilter });
  };

  updateCurrentRestaurant = currentRestaurant => {
    this.setState({ currentRestaurant });
  };

  addMarker(restaurant) {
    const { map } = this.context;
    const coordinates = { lat: restaurant.latitude, lng: restaurant.longitude };
    const GoogleMapsMarker = new window.google.maps.Marker({
      position: coordinates,
      animation: window.google.maps.Animation.DROP,
      icon: marker,
      map,
      title: "Hello World!"
    });
    const latLng = GoogleMapsMarker.getPosition();
    map.setCenter(latLng);
  }

  render() {
    const {
      currentRestaurant,
      updateCurrentRestaurant,
      currentFilter,
      updateCurrentFilter
    } = this.state;
    const { restaurants } = this.props;
    return (
      <Wrapper>
        <ResultsTitle>Autour de vous</ResultsTitle>
        <ResultsFilter>
          <h3>Filtrer les résultats</h3>
          <StarFilter
            number={1}
            event={() => updateCurrentFilter(this.filters.stars(1))}
          />
          <StarFilter
            number={2}
            event={() => updateCurrentFilter(this.filters.stars(2))}
          />
          <StarFilter
            number={3}
            event={() => updateCurrentFilter(this.filters.stars(3))}
          />
          <StarFilter
            number={4}
            event={() => updateCurrentFilter(this.filters.stars(4))}
          />
          <StarFilter
            number={5}
            event={() => updateCurrentFilter(this.filters.stars(5))}
          />
        </ResultsFilter>
        {restaurants.filter(currentFilter).map((data, index) => {
          const restaurant = new Restaurant(data);
          return currentRestaurant && currentRestaurant === restaurant.id ? (
            <RestaurantDetails
              key={`${restaurant.id}-${index}`}
              restaurant={restaurant}
            />
          ) : (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              event={() => {
                this.addMarker(restaurant);
                updateCurrentRestaurant(restaurant.id);
              }}
            />
          );
        })}
      </Wrapper>
    );
  }
}

Results.contextType = MyContext;

Results.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Results;
