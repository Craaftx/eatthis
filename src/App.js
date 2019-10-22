import React from "react";
import styled, { keyframes } from "styled-components";
import GoogleApi from "./utils/GoogleApi";
import config from "./config";
import MyContext from "./utils/MyContext";
import GoogleMaps from "./components/GoogleMaps";
import Menu from "./components/Menu";
import jsonRestaurantList from "./restaurant_list";
import Results from "./components/Results";

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
      googleScriptLoaded: false,
      updateGoogleScriptStatus: this.updateGoogleScriptStatus,
      map: null,
      updateMap: this.updateMap
    };
  }

  componentDidMount() {
    const { updateGoogleScriptStatus } = this.state;
    this.handleGoogleClientLoad(() => {
      updateGoogleScriptStatus(true);
    });
  }

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

  updateGoogleScriptStatus = googleScriptLoaded => {
    this.setState({ googleScriptLoaded });
  };

  updateMap = map => {
    this.setState({ map });
  };

  render() {
    const { map, updateMap, googleScriptLoaded } = this.state;
    return (
      <Wrapper>
        <Menu elements={this.menuElements} />
        {googleScriptLoaded ? (
          <MyContext.Provider value={{ map, updateMap, googleScriptLoaded }}>
            <Results restaurants={jsonRestaurantList} />
            <Map>
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
