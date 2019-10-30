import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { uid } from "react-uid";
import LocalStorage from "../utils/LocalStorage";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Form = styled.form``;

const FormGroup = styled.div``;

const FormInput = styled.input``;

const FormStarRating = styled.div``;

const FormTextarea = styled.textarea``;

const FormSubmit = styled.input``;

class FormReview extends React.Component {
  constructor(props) {
    super(props);
    this.formUsername = React.createRef();
    this.formText = React.createRef();
    this.formRating = 0;
    this.storage = new LocalStorage();
  }

  submitFormHandler = event => {
    event.preventDefault();
    const { restaurantId, handler } = this.props;
    const newReview = {
      name: this.formUsername.current.value,
      text: this.formText.current.value,
      imageUrl: null,
      rating: this.formRating,
      timeCreated: new Date()
    };
    newReview.id = `${restaurantId}-${uid(newReview)}`;
    this.storage.setReviews(restaurantId, newReview);
    handler();
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
            <FormStarRating>
              <Rater
                total={5}
                rating={0}
                onRate={({ rating }) => {
                  this.formRating = rating;
                }}
              />
            </FormStarRating>
          </FormGroup>
          <FormTextarea rows="5" name="formText" ref={this.formText} />
          <FormSubmit type="submit" />
        </Form>
      </Container>
    );
  }
}

FormReview.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default FormReview;
