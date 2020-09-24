import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import store from "./helpers/store";
import setAuthToken from "./helpers/setAuthToken";
import { loadUser } from "./actions/auth";

import PublicRoutes from "./publicRoutes";
import PrivateRoutes from "./privateRoutes.js";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ isAuthenticated }) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>{isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}</Router>
  );
};

App.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
