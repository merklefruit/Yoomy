import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import api from "./api";

export default combineReducers({
  alert,
  auth,
  api,
});
