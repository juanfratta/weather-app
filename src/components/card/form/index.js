import { useContext, useState } from "react";
import { WeatherContext } from "../../../context/weatherContext";
import {
  ButtonGetWeather,
  CityInput,
  CityLabel,
  FormContainer,
} from "./styles";

const Form = () => {
  const { setCityContext, getWeather } = useContext(WeatherContext);
  const [city, setCityLocalState] = useState("");

  const setCity = (e) => {
    setCityLocalState(e.target.value);
    setCityContext(e.target.value);
  };

  const getWeatherContext = (city) => {
    getWeather(city);
    setCityLocalState("");
  };

  return (
    <FormContainer>
      <div>
        <CityLabel>Enter a city name:</CityLabel>
        <CityInput
          placeholder="Your city ..."
          value={city}
          onChange={(e) => setCity(e)}
          onKeyDown={(e) =>
            e.key === "Enter" && city !== "" && getWeatherContext(city)
          }
        />
      </div>
      <ButtonGetWeather
        disabled={!city}
        onClick={() => getWeatherContext(city)}
      >
        Get Weather
      </ButtonGetWeather>
    </FormContainer>
  );
};

export default Form;
