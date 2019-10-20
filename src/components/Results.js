import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import Restaurant from "../model/Restaurant";
import RestaurantCard from "./RestaurantCard";
import MyContext from "../utils/MyContext";
import marker from "../marker.png";

const Infos = styled.div`
  z-index: 10;
  position: absolute;
  right: -20px;
  top: 0;
  padding: 5vh 5vw 0vh 20px;
  width: 400px;
  height: 100vh;
  overflow-y: auto;
`;

const InfosTitle = styled.h2`
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
`;

export default class Results extends React.Component {
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
    console.log(GoogleMapsMarker);
  }

  render() {
    const { restaurants } = this.props;
    return (
      <Infos>
        <InfosTitle>
          Autour de vous
        </InfosTitle>
        {restaurants.map((data, index) => {
          const restaurant = new Restaurant(data);
          return (
            <RestaurantCard
              key={index}
              restaurant={restaurant}
              event={() => {
                this.addMarker(restaurant);
              }}
            />
          );
        })}
      </Infos>
    );
  }
}

Results.contextType = MyContext;

Results.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};