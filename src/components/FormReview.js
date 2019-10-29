import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
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
    this.formRating = React.createRef();
    this.formText = React.createRef();
    this.starRatingControls = null;
    this.storage = new LocalStorage();
  }

  submitFormHandler = event => {
    event.preventDefault();
    const { restaurantId } = this.props;
    const newReview = {
      name: this.formUsername.current.value,
      text: this.formText.current.value,
    }
    this.storage.setReviews(restaurantId, newReview);
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
                <Rater total={5} rating={0} ref={this.formRating}/>
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
  restaurantId: PropTypes.string.isRequired
};

export default FormReview;
