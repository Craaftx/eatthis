import React from "react";
import styled, { keyframes } from "styled-components";
import GoogleApi from "./utils/GoogleApi";
import config from "./config";
import MyContext from "./utils/MyContext";
import GoogleMaps from "./components/GoogleMaps";
import Menu from "./components/Menu";
import jsonRestaurantList from "./restaurant_list";
import Results from "./components/Results";
import YelpAdapter from "./model/YelpAdapter";
import FormRestaurant from "./components/FormRestaurant";
import GooglePlacesAdapter from "./model/GooglePlacesAdapter";

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
  margin-left: 100px;
  width: calc(100% - 100px);
  height: 100%;
  display: ${props => (props.inactive ? "none" : "block")};
`;

const RestaurantFormWrapper = styled.div`
  position: absolute;
  z-index: 10;
  left: 150px;
  bottom: 5vh;
  width: 400px;
`;

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: radial-gradient(circle, transparent 60%, #cfcfe6 80%, #cfcfe6);
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  position: relative;
  margin-left: 100px;
  width: calc(100% - 100px);
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.menuElements = [
      { icon: "lni-menu" },
      { icon: "lni-dinner" },
      { icon: "lni-burger" },
      { icon: "lni-pizza" },
      { icon: "lni-chef-hat" },
      { icon: "lni-fresh-juice" },
      { icon: "lni-coffee-cup" },
      { icon: "lni-more" }
    ];

    this.state = {
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
    
    // TODO: get PlaceData and use adapater on it when load
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
      markers,
      addMarker,
      removeMarker,
      placesData,
      updatePlacesData,
      mapEvent,
      updateMapEvent
    } = this.state;
    return (
      <Wrapper>
        <Menu elements={this.menuElements} />
        {googleScriptLoaded ? (
          <MyContext.Provider
            value={{
              map,
              updateMap,
              markers,
              addMarker,
              removeMarker,
              placesData,
              updatePlacesData,
              updateMapEvent
            }}
          >
            <Results restaurants={YelpAdapter(jsonRestaurantList)} />
            {mapEvent && (
              <RestaurantFormWrapper>
                <FormRestaurant
                  latitude={mapEvent.latitude}
                  longitude={mapEvent.longitude}
                  formattedAddress="TODO: Get data from GeoCoding API of MapQuest because GoogleMaps GeoCoding is not free"
                />
              </RestaurantFormWrapper>
            )}
            <Map inactive={mapEvent}>
              <GoogleMaps />
              <Mask />
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
