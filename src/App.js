import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import store from "./helpers/store";
import setAuthToken from "./helpers/setAuthToken";
import { loadUser } from "./actions/auth";
import FullPageSpinner from "./components/fullPageSpinner";
import { Helmet } from "react-helmet";

const PrivateRoutes = React.lazy(() =>
  import(/* webpackPrefetch: true */ "./privateRoutes")
);
const PublicRoutes = React.lazy(() => import("./publicRoutes"));

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ isAuthenticated }) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Helmet>
        <title>Yooga.</title>
        <meta charSet="utf-8" />
      </Helmet>
      <React.Suspense fallback={<FullPageSpinner />}>
        {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
      </React.Suspense>
    </Router>
  );
};

App.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
