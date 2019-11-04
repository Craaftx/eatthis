import styled from "styled-components";

export const Form = styled.form`
  margin: 10px 0;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: #444;
  margin: 20px 0px;
  small {
    font-size: 0.7rem;
    letter-spacing: 0;
    font-weight: 400;
    text-transform: none;
    color: #888;
  }
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: 12px 20px;
  margin: 12px 0 8px 0;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  background-color: #ddd;
`;

export const FormSelect = styled.select`
  display: block;
  width: 200px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  background-color: #ddd;
`;

export const FormTextarea = styled.textarea`
  display: block;
  width: 100%;
  padding: 12px 20px;
  margin: 12px 0 8px 0;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  background-color: #ddd;
`;

export const FormGroup = styled.div`
  display: flex;
`;

export const FormStarRating = styled.div`
  font-size: 1.4rem;
`;
