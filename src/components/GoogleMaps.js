import React from "react";
import styled from "styled-components";
import googleMapsTheme from "../utils/GoogleMapsTheme";
import MyContext from "../utils/MyContext";
import usermarker from "../usermarker.png";
import GooglePlace from "../utils/GooglePlace";

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

class GoogleMaps extends React.PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
    this.infoWindow = null;
    this.htmlMap = React.createRef();
  }

  componentDidMount() {
    this.initMap(this.context);
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(this.map);
  }

  initMap() {
    const {
      updateMap,
      addMarker,
      updatePlacesData,
      updateMapEvent
    } = this.context;

    this.map = new window.google.maps.Map(this.htmlMap.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 14,
      styles: googleMapsTheme,
      disableDefaultUI: true,
      zoomControl: true,
      scaleControl: true
    });
    this.infoWindow = new window.google.maps.InfoWindow();

    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.map.setCenter(pos);
          // eslint-disable-next-line no-new
          const userMarker = new window.google.maps.Marker({
            position: pos,
            animation: window.google.maps.Animation.DROP,
            icon: usermarker,
            map: this.map
          });
          addMarker({ userMarker });

          const { markers } = this.context;
          const location = new window.google.maps.LatLng(
            markers[0].userMarker.getPosition().lat(),
            markers[0].userMarker.getPosition().lng()
          );

          this.map.addListener("click", event => {
            const latitude = event.latLng.lat();
            const longitude = event.latLng.lng();

            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ location: {lat: latitude, lng: longitude }}, (results, status) => {
              if (status === "OK") {
                if (results[0]) {
                  updateMapEvent({
                    latitude,
                    longitude,
                    formatted_address: results[0].formatted_address
                  });
                } else {
                  console.log("No results found");
                }
              } else {
                console.log(`Geocoder failed due to:  ${status}`);
              }
            });
          });

          const request = {
            location,
            radius: "1000",
            type: ["restaurant"],
            map: this.map
          };
          updatePlacesData(GooglePlace(request));
        },
        () => {
          this.handleLocationError(true, this.infoWindow, this.map.getCenter());
        }
      );
    } else {
      this.handleLocationError(false, this.infoWindow, this.map.getCenter());
    }
    updateMap(this.map);
  }

  render() {
    return <Map ref={this.htmlMap} />;
  }
}
GoogleMaps.contextType = MyContext;

export default GoogleMaps;
