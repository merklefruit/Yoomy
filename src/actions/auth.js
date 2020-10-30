import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "../helpers/setAuthToken";
import { API_URL, TEACHERS_URL, USERS_URL } from "../helpers/config";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  TEACHER_LOADED,
} from "./types";

// Load Auth
// Calls API to load user or teacher based on token
export const loadAuth = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const loadUrl = API_URL + "/current";
    const res = await axios.get(loadUrl);

    if (res.data.user) {
      dispatch({
        type: USER_LOADED,
        payload: res.data.user,
      });
    } else if (res.data.teacher) {
      dispatch({
        type: TEACHER_LOADED,
        payload: res.data.teacher,
      });
    } else {
      console.error("ACTIONS/AUTH: API should return a user kind");
    };

  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = ({ name, surname, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, surname, email, password });

  try {
    const registerUrl = USERS_URL + "/register";
    const res = await axios.post(registerUrl, body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadAuth());
  } catch (err) {
    const error = err.response
      ? err.response.data.message
      : "Errore Interno. Riprova più tardi.";
    dispatch(setAlert(error, "", "error"));
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const loginUrl = USERS_URL + "/authenticate";
    const res = await axios.post(loginUrl, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadAuth());
  } catch (err) {
    const error = err.response
      ? err.response.data.message
      : "Errore Interno. Riprova più tardi.";
    dispatch(setAlert(error, "", "error"));
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Login Teacher
export const teacherLogin = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const loginUrl = TEACHERS_URL + "/authenticate";
    const res = await axios.post(loginUrl, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadAuth());
  } catch (err) {
    const error = err.response
      ? err.response.data.message
      : "Errore Interno. Riprova più tardi.";
    dispatch(setAlert(error, "", "error"));
    dispatch({
      type: LOGIN_FAIL,
    });
  }
}

// Logout User
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
