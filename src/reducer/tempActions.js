import axios from "axios";

export const GET_TEMP_BEGIN = "GET_TEMP_BEGIN";
export const GET_TEMP_SUCCESS = "GET_TEMP_SUCCESS";
export const GET_TEMP_FAILURE = "GET_TEMP_FAILURE";
export const SET_CITY_SUCCESS = "SET_CITY_SUCCESS";
export const SET_CITY_ERROR = "SET_CITY_ERROR";

const key = "fd3f6fc9e72f95aca6d3b73746616725";

export const set_city = (city, dispatch) => {
  try {
    dispatch({
      type: SET_CITY_SUCCESS,
      payload: city,
    });
  } catch (error) {
    dispatch({
      type: SET_CITY_ERROR,
      payload: error,
    });
  }
};

export const get_temp = async (state, dispatch) => {
  try {
    dispatch({
      type: GET_TEMP_BEGIN,
    });

    const base_url = "http://api.openweathermap.org/data/2.5/weather?q=";
    const endpoint = `${base_url}${state.city}&APPID=${key}`;
    const res = await axios.get(endpoint);

    dispatch({
      type: GET_TEMP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TEMP_FAILURE,
      payload: error,
    });
  }
};
