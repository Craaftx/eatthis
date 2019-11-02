import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { uid } from "react-uid";
import LocalStorage from "../utils/LocalStorage";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Form = styled.form``;

const FormGroup = styled.div``;

const FormInput = styled.input``;

const FormSelect = styled.select``;

const FormTextarea = styled.textarea``;

const FormSubmit = styled.input``;

class FormRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.formUsername = React.createRef();
    this.formText = React.createRef();
    this.formPrice = React.createRef();
    this.storage = new LocalStorage();
  }

  submitFormHandler = event => {
    event.preventDefault();
    const { latitude, longitude } = this.props;
    const newRestaurant = {
      id: null,
      alias: null,
      name: null,
      imageUrl: null,
      reviewCount: null,
      rating: null,
      categories: null,
      latitude,
      longitude,
      displayAddress: null,
      priceLevel: null,
      reviews: null,
    };
    newRestaurant.id = `${newRestaurant.rating}eat${uid(newRestaurant)}this`;
    this.storage.setReviews('restaurants', newRestaurant);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.submitFormHandler}>
          <FormGroup>
            <FormInput
              type="text"
              name="formUsername"
              ref={this.formUsername}
            />
          </FormGroup>
          <FormSelect>
              <option>€</option>
              <option>€€</option>
              <option>€€€</option>
              <option>???</option>
          </FormSelect>
          <FormTextarea rows="5" name="formText" ref={this.formText} />
          <FormSubmit type="submit" />
        </Form>
      </Container>
    );
  }
}

FormRestaurant.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default FormRestaurant;
