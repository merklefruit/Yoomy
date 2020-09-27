import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import apiMiddleware from "./apiMiddleware";
import rootReducer from "../reducers";

const intialState = {};

const middleware = [thunk, apiMiddleware];

const store = createStore(
  rootReducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
