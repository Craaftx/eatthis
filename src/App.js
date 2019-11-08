import React from "react";
import styled from "styled-components";
import GoogleApi from "./utils/GoogleApi";
import config from "./config";
import MyContext from "./utils/MyContext";
import GoogleMaps from "./components/GoogleMaps";
import jsonRestaurantList from "./restaurant_list";
import Results from "./components/Results";
import YelpAdapter from "./model/YelpAdapter";
import FormRestaurant from "./components/FormRestaurant";
import GooglePlacesAdapter from "./model/GooglePlacesAdapter";
import LocalStorage from "./utils/LocalStorage";
import { rotate } from "./utils/keyframes";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: linear-gradient(
    to left bottom,
    #cfcfe6,
    #d3d3e8,
    #d7d7ea,
    #dbdbec,
    #dfdfee
  );
  font-family: "Lato", sans-serif;
  color: #333333;
`;

const Map = styled.div`
  width: 100%;
  height: 100%;
  display: ${props => (props.inactive ? "none" : "block")};
`;

const RestaurantFormWrapper = styled.div`
  position: absolute;
  z-index: 10;
  left: 50px;
  bottom: 5vh;
  width: 400px;
`;

const Loading = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #dfdfee;
    border-top: 2px solid #65359b;
  }
  animation: ${rotate} 1s linear infinite;
`;

const aggregateData = (items = []) => {
  if (items.length > 1) {
    return items.flat(2);
  }
  return items;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionMarker: null,
      setPositionMarker: this.setPositionMarker,
      markers: [],
      addMarker: this.addMarker,
      removeMarker: this.removeMarker,
      googleScriptLoaded: false,
      updateGoogleScriptStatus: this.updateGoogleScriptStatus,
      map: null,
      updateMap: this.updateMap,
      placesData: null,
      updatePlacesData: this.updatePlacesData,
      mapEvent: null,
      updateMapEvent: this.updateMapEvent
    };

    this.storage = new LocalStorage();
  }

  componentDidMount() {
    const { updateGoogleScriptStatus } = this.state;
    this.handleGoogleClientLoad(() => {
      updateGoogleScriptStatus(true);
    });
  }

  addMarker = marker => {
    const { markers } = this.state;
    this.setState({ markers: [...markers, marker] });
  };

  setPositionMarker = positionMarker => {
    this.setState({ positionMarker });
  };

  removeMarker = markerId => {
    this.setState(prevState => ({
      markers: prevState.markers.filter(currentMarker => {
        if (Object.keys(currentMarker)[0] === markerId) {
          currentMarker[`${Object.keys(currentMarker)[0]}`].setMap(null);
        }
        return Object.keys(currentMarker)[0] !== markerId;
      })
    }));
  };

  updateGoogleScriptStatus = googleScriptLoaded => {
    this.setState({ googleScriptLoaded });
  };

  updatePlacesData = placesData => {
    this.setState({ placesData });
  };

  updateMap = map => {
    this.setState({ map });
  };

  updateMapEvent = mapEvent => {
    this.setState({ mapEvent });
  };

  handleGoogleClientLoad = callback => {
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
    document.head.appendChild(script);
  };

  render() {
    const {
      map,
      updateMap,
      googleScriptLoaded,
      positionMarker,
      setPositionMarker,
      markers,
      addMarker,
      removeMarker,
      placesData,
      updatePlacesData,
      mapEvent,
      updateMapEvent
    } = this.state;

    const restaurantData = aggregateData([
      this.storage.getRestaurants(),
      placesData ? GooglePlacesAdapter(placesData) : [],
      YelpAdapter(jsonRestaurantList)
    ]);

    return (
      <Wrapper>
        {googleScriptLoaded ? (
          <MyContext.Provider
            value={{
              map,
              updateMap,
              positionMarker,
              setPositionMarker,
              markers,
              addMarker,
              removeMarker,
              placesData,
              updatePlacesData,
              updateMapEvent
            }}
          >
            <Results restaurants={restaurantData} />
            {mapEvent && (
              <RestaurantFormWrapper>
                <FormRestaurant
                  latitude={mapEvent.latitude}
                  longitude={mapEvent.longitude}
                />
              </RestaurantFormWrapper>
            )}
            <Map inactive={mapEvent}>
              <GoogleMaps />
            </Map>
          </MyContext.Provider>
        ) : (
          <Loading />
        )}
      </Wrapper>
    );
  }
}

export default App;
