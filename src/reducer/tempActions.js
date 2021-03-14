import axios from "axios";

//actions types
export const GET_TEMP_BEGIN = "GET_TEMP_BEGIN";
export const GET_TEMP_SUCCESS = "GET_TEMP_SUCCESS";
export const GET_TEMP_FAILURE = "GET_TEMP_FAILURE";
export const SET_ENDPOINT = "SET_ENDPOINT";

const key = "fd3f6fc9e72f95aca6d3b73746616725";

//actions creators

export const get_temp = async (dispatch) => {
  try {
    dispatch({
      type: GET_TEMP_BEGIN,
    });

    //Estas variables deberían venir desde el state, una vez que esté seteada la funcionalidad

    const base_url = "http://api.openweathermap.org/data/2.5/weather?q=";
    const city = "London";

    const endpoint = `${base_url}${city}&APPID=${key}`;
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
