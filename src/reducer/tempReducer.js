import {
  GET_TEMP_BEGIN,
  GET_TEMP_FAILURE,
  GET_TEMP_SUCCESS,
  SET_CITY_SUCCESS,
  SET_CITY_ERROR,
} from "./tempActions";

export const tempReducer = (state, action) => {
  switch (action.type) {
    case SET_CITY_SUCCESS:
      return {
        ...state,
        city: action.payload,
      };
    case SET_CITY_ERROR:
      return {
        ...state,
        error: true,
      };
    case GET_TEMP_BEGIN:
      return {
        ...state,
        loading: true,
        data: null,
        error: false,
      };

    case GET_TEMP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
      };

    case GET_TEMP_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        error: true,
      };

    default:
  }
};
