import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import store from "./helpers/store";

// Helpers
import setAuthToken from "./helpers/setAuthToken";
import { loadAuth } from "./actions/auth";
import { Helmet } from "react-helmet";
import FullPageSpinner from "./components/fullPageSpinner";

// Toast notifications (dispatched directly in actions -> alert )
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Sentry monitoring
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

// Sentry initialization
Sentry.init({
  dsn:
    "https://fc88e1f9e8c046ca816c4855045eac15@o495499.ingest.sentry.io/5568329",
  autoSessionTracking: true,
  integrations: [new Integrations.BrowserTracing()],
  // (Sentry recommends adjusting this value in production)
  // 1.0 sends every issue notifcation
  tracesSampleRate: 1.0,
});

/*
  Yoomy Routing:
  Yoomy uses auth-based routing, because many different user types can be logged in to the same app.
  In particular, there are:
  - VISITORS, which are non-logged-in users
  - USERS, which are regular yoomy customers
  - TEACHERS, which have access to their own private routes.

  To avoid long load times, each user type has its own routing, which is lazy-loaded here below.
*/

const AppRoutes = React.lazy(() =>
  import(/* webpackPrefetch: true */ "./routes/appRoutes")
);
const TeacherRoutes = React.lazy(() => import("./routes/teacherRoutes"));
const MarketingRoutes = React.lazy(() => import("./routes/marketingRoutes"));

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ loading, user, teacher }) => {
  useEffect(() => {
    store.dispatch(loadAuth());
  }, []);

  return (
    <>
      <Helmet>
        <title>Yoomy.</title>
        <meta charSet="utf-8" />
        {process.env.REACT_APP_NODE_ENV !== "development" && (
          <script async src="https://cdn.splitbee.io/sb.js"></script>
        )}
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
  teacher: PropTypes.object,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  user: state.auth.user,
  teacher: state.auth.teacher,
});

export default Sentry.withProfiler(connect(mapStateToProps)(App));
