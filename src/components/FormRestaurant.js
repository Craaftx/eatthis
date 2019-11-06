import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { uid } from "react-uid";
import MyContext from "../utils/MyContext";
import MapQuest from "../utils/MapQuest";
import LocalStorage from "../utils/LocalStorage";
import { PrimaryButton, TertiaryButton } from "./Buttons";
import {
  Form,
  FormLabel,
  FormInput,
  FormSelect,
  FormGroup,
  FormStarRating
} from "./Form";

const Container = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  padding: 15px 25px 10px 25px;
  width: 100%;
  box-sizing: border-box;
  transition: 0.2s;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);

  h2 {
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
  }
`;

const TertiaryButtonDestructive = styled(TertiaryButton)`
  color: #e53935;
  margin-left: 20px;
`;

class FormRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.formName = React.createRef();
    this.formImageUrl = React.createRef();
    this.formTags = React.createRef();
    this.formPriceLevel = React.createRef();
    this.formRating = 0;
    this.storage = new LocalStorage();
  }

  submitFormHandler = async event => {
    event.preventDefault();
    const { updateMapEvent } = this.context;
    const { latitude, longitude } = this.props;
    const formattedAddress = await MapQuest("geocoding", {
      location: `${latitude},${longitude}`
    });
    console.log(formattedAddress.results[0].locations[0].street);
    const newRestaurant = {
      id: null,
      alias: null,
      name: this.formName.current.value,
      imageUrl: this.formImageUrl.current.value,
      reviewCount: 1,
      rating: this.formRating,
      categories: this.formTags.current.value.split(","),
      latitude,
      longitude,
      displayAddress: formattedAddress,
      priceLevel: this.formPriceLevel.current.value,
      reviews: null
    };
    newRestaurant.id = `${newRestaurant.rating}eat${uid(newRestaurant)}this`;
    this.storage.addRestaurant(newRestaurant);
    updateMapEvent(null);
  };

  render() {
    const { updateMapEvent } = this.context;
    return (
      <Container>
        <h2>Ajouter un restaurant</h2>
        <Form onSubmit={this.submitFormHandler}>
          <FormLabel>
            Nom
            <FormInput
              type="text"
              name="formName"
              ref={this.formName}
              required
            />
          </FormLabel>
          <FormLabel>
            Image
            <FormInput
              type="text"
              name="formImageUrl"
              ref={this.formImageUrl}
              required
            />
            <small>Copiez le lien vers l&apos;image</small>
          </FormLabel>
          <FormLabel>
            Catégories
            <FormInput
              type="text"
              name="formTags"
              ref={this.formTags}
              required
            />
            <small>Séparées par des virgules</small>
          </FormLabel>
          <FormLabel>
            Niveau des prix
            <FormSelect
              name="formPriceLevel"
              ref={this.formPriceLevel}
              required
            >
              <option>€</option>
              <option>€€</option>
              <option>€€€</option>
            </FormSelect>
          </FormLabel>
          <FormLabel>
            Votre note
            <FormStarRating>
              <Rater
                total={5}
                rating={0}
                onRate={({ rating }) => {
                  this.formRating = rating;
                }}
              />
            </FormStarRating>
          </FormLabel>
          <FormGroup>
            <PrimaryButton type="submit">Ajouter un restaurant</PrimaryButton>
            <TertiaryButtonDestructive
              onClick={() => {
                updateMapEvent(null);
              }}
            >
              Annuler
            </TertiaryButtonDestructive>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

FormRestaurant.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
};

FormRestaurant.contextType = MyContext;

export default FormRestaurant;
