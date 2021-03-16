import axios from "axios";
import { BASE_URL, KEY } from "../utils/variables";

export const GET_TEMP_BEGIN = "GET_TEMP_BEGIN";
export const GET_TEMP_SUCCESS = "GET_TEMP_SUCCESS";
export const GET_TEMP_FAILURE = "GET_TEMP_FAILURE";
export const SET_CITY_SUCCESS = "SET_CITY_SUCCESS";
export const SET_CITY_ERROR = "SET_CITY_ERROR";

export const setCity = (city, dispatch) => {
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

export const getTemp = async (state, dispatch) => {
  try {
    dispatch({
      type: GET_TEMP_BEGIN,
    });

    const endpoint = `${BASE_URL}${state.city}&APPID=${KEY}`;
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
