import React from "react";
import styled from "styled-components";
import GoogleApi from "../utils/GoogleApi";
import config from "../config";
import googleMapsTheme from "../utils/GoogleMapsTheme";
import MyContext from "../utils/MyContext";
import usermarker from "../usermarker.png";

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

export class GoogleMaps extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.infoWindow = null;
    this.htmlMap = React.createRef();
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
    this.map = new window.google.maps.Map(this.htmlMap.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 14,
      styles: googleMapsTheme,
      disableDefaultUI: true,
      zoomControl: true,
      scaleControl: true
    });
    this.infoWindow = new window.google.maps.InfoWindow();

    // Try HTML5 geolocation.
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.map.setCenter(pos);
          new window.google.maps.Marker({
            position: pos,
            animation: window.google.maps.Animation.DROP,
            icon: usermarker,
            map: this.map,
          });
        }.bind(this),
        function() {
          this.handleLocationError(true, this.infoWindow, this.map.getCenter());
        }.bind(this)
      );
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, this.infoWindow, this.map.getCenter());
    }
    this.context.updateMap(this.map);
  }

  handleGoogleClientLoad(callback) {
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      GoogleApi({
        apiKey: config.google.apiKey,
        libraries: config.google.libraries
      })
    );
    script.onreadystatechange = callback;
    script.onload = callback;
    document.body.appendChild(script);
  }

  componentDidMount() {
    this.handleGoogleClientLoad(() => {
      this.initMap(this.context);
    });
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
