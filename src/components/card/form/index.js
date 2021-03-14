import {
  ButtonGetWeather,
  CityInput,
  CityLabel,
  FormContainer,
} from "./styles";

const Form = () => {
  return (
    <FormContainer>
      <div>
        <CityLabel>Ingrese una ciudad:</CityLabel>
        <CityInput placeholder="Your city ..." />
      </div>
      <ButtonGetWeather>Get Weather</ButtonGetWeather>
    </FormContainer>
  );
};

export default Form;
