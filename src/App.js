import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import store from "./helpers/store";

// Helpers
import setAuthToken from "./helpers/setAuthToken";
import { loadUser } from "./actions/auth";
import { Helmet } from "react-helmet";
import FullPageSpinner from "./components/fullPageSpinner";

// Toast notifications (dispatched directly in actions -> alert )
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoutes = React.lazy(() =>
  import(/* webpackPrefetch: true */ "./privateRoutes")
);
const PublicRoutes = React.lazy(() => import("./publicRoutes"));

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ isAuthenticated, loading, user }) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Helmet>
        <title>Yoomy.</title>
        <meta charSet="utf-8" />
      </Helmet>
      <React.Suspense fallback={<FullPageSpinner />}>
        <ToastContainer />
        <Router>
          {loading ? (
            <FullPageSpinner />
          ) : isAuthenticated ? (
            <PrivateRoutes />
          ) : (
            <PublicRoutes />
          )}
        </Router>
      </React.Suspense>
    </>
  );
};

App.propTypes = {
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  user: state.auth.user,
});

export default connect(mapStateToProps)(App);
