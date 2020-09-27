import { API_START, API_END, ACCESS_DENIED, API_ERROR } from "./types";

export const apiStart = (label) => (dispatch) => {
  dispatch({
    type: API_START,
    payload: label,
  });
};

export const apiEnd = (label) => (dispatch) => {
  dispatch({
    type: API_END,
    payload: label,
  });
};

export const accessDenied = (url) => (dispatch) => {
  dispatch({
    type: ACCESS_DENIED,
    payload: {
      url,
    },
  });
};

export const apiError = (error) => (dispatch) => {
  dispatch({
    type: API_ERROR,
    error,
  });
};
