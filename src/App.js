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

// Conditional routes
const AppRoutes = React.lazy(() =>
  import(/* webpackPrefetch: true */ "./routes/appRoutes"));
const TeacherRoutes = React.lazy(() => import("./routes/teacherRoutes"));
const MarketingRoutes = React.lazy(() => import("./routes/marketingRoutes"));

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ loading, user, teacher }) => {
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
          ) : user ? (
            <AppRoutes />
          ) : teacher ? (
            <TeacherRoutes />
          ) : (
                  <MarketingRoutes />
                )}
        </Router>
      </React.Suspense>
    </>
  );
};

App.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object,
  teacher: PropTypes.object
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  user: state.auth.user,
  teacher: state.auth.teacher
});

export default connect(mapStateToProps)(App);
