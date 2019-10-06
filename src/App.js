import React from "react";
import styled from "styled-components";
import { GoogleMaps } from "./components/GoogleMaps";

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

const Menu = styled.div`
  z-index: 10;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100%;
  padding: 5vh 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-image: linear-gradient(
    to bottom,
    #4845ab,
    #643fa3,
    #793a99,
    #89348f,
    #953084
  );
`;

const MenuItem = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: transparent;
  transition: background-color 0.2s;
  cursor: pointer;
  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #cccccc;
    font-size: 30px;
  }
  &:hover {
    background-color: #2a2051;
    i {
      color: #ffffff;
    }
  }
`;

const Infos = styled.div`
  z-index: 10;
  position: absolute;
  right: 5vw;
  top: 5vh;
  width: 400px;
  height: 80vh;
`;

const InfosTitle = styled.h2`
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
`;

const InfosItem = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 15px 20px 15px 25px;
  height: 200px;
  box-sizing: border-box;
  align-items: center;
  margin-bottom: 20px;
  transition: 0.2s;
  :hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.12);
  }
`;

const InfosItemDescription = styled.div`
  flex: 2;
  padding-right: 10px;
  h3 {
    margin: 0 0 5px 0;
    font-family: "Montserrat", sans-serif;
  }
  small {
    color: #888;
  }
`;

const InfosItemImage = styled.img`
  flex: 1
  border-radius: 5px
  height: 160px;
`;

const InfosItemDescriptionStars = styled.div`
  margin: 10px 0;
  div {
    display: inline-block;
  }
  i {
    color: #65359b;
    margin: 0 3px;
  }
  small {
    color: #8b86c8;
    margin-left: 5px;
  }
`;

const InfosItemDescriptionFood = styled.div`
  h4 {
    margin: 15px 0 5px 0;
    color: #555;
    font-weight: 500;
    font-size: 0.8rem;
  }
`;

const Map = styled.div`
  margin-left: 100px;
  width: calc(100% - 100px);
  height: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Menu>
        <MenuItem>
          <i className="lni-menu" />
        </MenuItem>
        <MenuItem>
          <i className="lni-dinner" />
        </MenuItem>
        <MenuItem>
          <i className="lni-burger" />
        </MenuItem>
        <MenuItem>
          <i className="lni-pizza" />
        </MenuItem>
        <MenuItem>
          <i className="lni-chef-hat" />
        </MenuItem>
        <MenuItem>
          <i className="lni-fresh-juice" />
        </MenuItem>
        <MenuItem>
          <i className="lni-coffee-cup" />
        </MenuItem>
        <MenuItem>
          <i className="lni-more" />
        </MenuItem>
      </Menu>
      <Infos>
        <InfosTitle>Autour de vous</InfosTitle>
        <InfosItem>
          <InfosItemDescription>
            <h3>Brasserie du bureau</h3>
            <small>
              <i class="lni-direction-alt"></i> 100m de votre position
            </small>
            <InfosItemDescriptionStars>
              <div>
                <i class="lni-star-filled"></i>
                <i class="lni-star-filled"></i>
                <i class="lni-star-filled"></i>
                <i class="lni-star-filled"></i>
                <i class="lni-star"></i>
              </div>
              <small>24 avis</small>
            </InfosItemDescriptionStars>
            <InfosItemDescriptionFood>
              <h4>Cuisine</h4>
              <span>Brasseur, Burger, Traditionnel</span>
            </InfosItemDescriptionFood>
          </InfosItemDescription>
          <InfosItemImage
            src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="nothing"
          />
        </InfosItem>
        <InfosItem>
          <InfosItemDescription>
            <h3>L'assiette pleine</h3>
            <small>
              <i class="lni-direction-alt"></i> 150m de votre position
            </small>
            <InfosItemDescriptionStars>
              <div>
                <i class="lni-star-filled"></i>
                <i class="lni-star-filled"></i>
                <i class="lni-star-filled"></i>
                <i class="lni-star"></i>
                <i class="lni-star"></i>
              </div>
              <small>125 avis</small>
            </InfosItemDescriptionStars>
            <InfosItemDescriptionFood>
              <h4>Cuisine</h4>
              <span>Gourmet, Tapas, Traditionnel</span>
            </InfosItemDescriptionFood>
          </InfosItemDescription>
          <InfosItemImage
            src="https://images.pexels.com/photos/5929/food-salad-dinner-eating.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="nothing"
          />
        </InfosItem>
      </Infos>
      <Map>
        <GoogleMaps />
      </Map>
    </Wrapper>
  );
}

export default App;
