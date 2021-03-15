import { useContext, useState } from "react";
import { WeatherContext } from "../../../context/weatherContext";
import {
  ButtonGetWeather,
  CityInput,
  CityLabel,
  FormContainer,
} from "./styles";

const Form = () => {
  const { set_city_and_get_weather } = useContext(WeatherContext);
  const [city, setCity] = useState("");

  return (
    <FormContainer>
      <div>
        <CityLabel>Ingrese una ciudad:</CityLabel>
        <CityInput
          placeholder="Your city ..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <ButtonGetWeather onClick={() => set_city_and_get_weather(city)}>
        Get Weather
      </ButtonGetWeather>
    </FormContainer>
  );
};

export default Form;
