import styled from "styled-components";

export const FormContainer = styled.div`
  height: 40%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
`;

export const CityLabel = styled.p`
  color: grey;
  font-family: "Roboto", sans-serif;
  margin: 2px;
`;

export const CityInput = styled.input`
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 5px;
  outline: none;
`;

export const ButtonGetWeather = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: yellowgreen;
  padding: 15px;
  color: white;
  &:disabled {
    opacity: 0.5;
  }
`;
