import React from "react";
import styled from "styled-components";
import GoogleApi from "../utils/GoogleApi";
import config from "../config";
import googleMapsTheme from "../utils/GoogleMapsTheme";

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

export class GoogleMaps extends React.Component {
  constructor(props) {
    super(props);
    this.htmlMap = React.createRef();
    this.map = null;
  }

  initMap() {
    this.map = new window.google.maps.Map(this.htmlMap.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
      styles: googleMapsTheme,
      disableDefaultUI: true,
      zoomControl: true,
      scaleControl: true
    });
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
      this.initMap();
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
