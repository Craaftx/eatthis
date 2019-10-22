import React from "react";
import styled from "styled-components";
import googleMapsTheme from "../utils/GoogleMapsTheme";
import MyContext from "../utils/MyContext";
import usermarker from "../usermarker.png";

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

class GoogleMaps extends React.Component {
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
    const { updateMap } = this.context;

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
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.map.setCenter(pos);
          // eslint-disable-next-line no-new
          new window.google.maps.Marker({
            position: pos,
            animation: window.google.maps.Animation.DROP,
            icon: usermarker,
            map: this.map,
          });
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
    return (
      <>
        <Map ref={this.htmlMap} />
      </>
    );
  }
}
GoogleMaps.contextType = MyContext;

export default GoogleMaps;