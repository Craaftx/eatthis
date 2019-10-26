import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

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
  }

  submitFormHandler = event => {
    const { restaurantId } = this.props;
    event.preventDefault();
    console.log(restaurantId);
    console.log(this.formUsername.value);
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
