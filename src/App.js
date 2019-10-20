import React from "react";
import styled from "styled-components";
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
  }

  setMap = map => {
    this.setState({ map });
  };

  state = {
    map: null,
    setMap: this.setMap
  };

  render() {
    return (
      <Wrapper>
        <Menu elements={this.menuElements} />
        <MyContext.Provider
          value={{ map: this.state.map, updateMap: this.state.setMap }}
        >
          <Results restaurants={jsonRestaurantList} />
          <Map>
            <GoogleMaps />
            <Mask />
          </Map>
        </MyContext.Provider>
      </Wrapper>
    );
  }
}

export default App;
