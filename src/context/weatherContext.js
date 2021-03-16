import { createContext, useReducer } from "react";
import { getTemp, setCity } from "../reducer/tempActions";
import { tempReducer } from "../reducer/tempReducer";

export const WeatherContext = createContext();

const initialState = {
  loading: false,
  data: null,
  error: false,
  url: undefined,
  city: undefined,
};

export const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tempReducer, initialState);
  const { loading, data, error, city, url } = state;

  const setCityContext = (city) => {
    setCity(city, dispatch);
  };

  const getWeather = () => {
    getTemp(state, dispatch);
  };

  return (
    <WeatherContext.Provider
      value={{ loading, data, error, city, url, setCityContext, getWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
