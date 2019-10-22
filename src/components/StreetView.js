import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import MyContext from "../utils/MyContext";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

class StreetView extends React.Component {
  constructor(props) {
    super(props);
    this.htmlStreetView = React.createRef();
  }

  componentDidMount() {
    const { latitude, longitude } = this.props;
    // eslint-disable-next-line no-new
    new window.google.maps.StreetViewPanorama(this.htmlStreetView.current, {
      position: { lat: latitude, lng: longitude }
    });
  }

  render() {
    return (
      <>
        <Container ref={this.htmlStreetView} />
      </>
    );
  }
}

StreetView.contextType = MyContext;

StreetView.propTypes = {
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired
};

export default StreetView;
