import { createContext, useReducer } from "react";
import { get_temp, set_city } from "../reducer/tempActions";
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

  const set_city_and_get_weather = (city) => {
    set_city(city, dispatch);
    get_temp(state, dispatch);
  };

  return (
    <WeatherContext.Provider
      value={{ loading, data, error, city, url, set_city_and_get_weather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
