import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Layout
import AppLayout from "../components/_app/appLayout";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

// API calls
import { fetchCourses, fetchTeachers } from "../actions";

// App Routes (should be protected)
import PerTePage from "../pages/_app/perTePage";
import IstruttoriPage from "../pages/_app/istruttoriPage";
import AccountPage from "../pages/_app/accountPage";
import CalendarioPage from "../pages/_app/calendarioPage";
import IstruttorePage from "../pages/_app/istruttorePage";
import FullPageSpinner from "../components/fullPageSpinner";
import GuidaPerIniziare from "../pages/_app/guidaPerIniziare";

function PrivateRoutes({ fetchTeachers, fetchCourses, user }) {
  useEffect(() => {
    fetchTeachers();
    fetchCourses();
  });

  // Analytics: User tracking:
  useEffect(() => {
    if (user & process.env.NODE_ENV !== "DEVELOPMENT") {
      window.splitbee.user.set({ displayName: user.name });
      window.splitbee.user.set({ email: user.email });
      window.splitbee.user.set({ userKind: "user" });
    }
  }, [user]);

  return (
    <>
      {/* USER ROUTES */}
      {user && (
        <AppLayout>
          <Switch>
            <Route exact path="/app/per-te" component={PerTePage} />
            <Route exact path="/app/istruttori" component={IstruttoriPage} />
            <Route path="/app/istruttore/:id" component={IstruttorePage} />
            <Route exact path="/app/calendario" component={CalendarioPage} />
            <Route exact path="/app/account" component={AccountPage} />

            <Route
              exact
              path="/app/guida-per-iniziare"
              component={GuidaPerIniziare}
            />

            {/* Fallback */}
            <Route>
              <Redirect to="/app/per-te" />
            </Route>
          </Switch>
        </AppLayout>
      )}

      {/* Only shown if isAuthenticated AND we don't have user object yet. */}
      {!user && <FullPageSpinner />}
    </>
  );
}

PrivateRoutes.propTypes = {
  fetchTeachers: PropTypes.func.isRequired,
  fetchCourses: PropTypes.func.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { fetchTeachers, fetchCourses })(
  PrivateRoutes
);
