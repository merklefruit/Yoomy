import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Layouts
import AppLayout from "./components/_app/appLayout";
import TeachersLayout from "./components/_teachers/teachersLayout";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

// API calls
import { fetchCourses, fetchTeachers } from "./actions";

// App Routes (should be protected)
import PerTePage from "./pages/_app/perTePage";
import IstruttoriPage from "./pages/_app/istruttoriPage";
import AccountPage from "./pages/_app/accountPage";
import CalendarioPage from "./pages/_app/calendarioPage";
import IstruttorePage from "./pages/_app/istruttorePage";
import FullPageSpinner from "./components/fullPageSpinner";
import TeachersHome from "./pages/_teachers/teachersHome";
import TeachersEvents from "./pages/_teachers/teachersEvents";
import TeachersPagamenti from "./pages/_teachers/teachersPagamenti";
import TeachersSettings from "./pages/_teachers/teachersSettins";
import TeachersSupport from "./pages/_teachers/teachersSupport";
import GuidaPerIniziare from "./pages/_app/guidaPerIniziare";

function PrivateRoutes({ fetchTeachers, fetchCourses, user }) {
  useEffect(() => {
    fetchTeachers();
    fetchCourses();
  });

  // Analytics: User tracking:
  useEffect(() => {
    if (user) {
      window.splitbee.user.set({ displayName: user.name });
      window.splitbee.user.set({ email: user.email });
    }
  }, [user]);

  return (
    <>
      {/* USERS ROUTES */}
      {user && user.role !== "teacher" && (
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

      {/* TEACHER ROUTES */}
      {user && user.role === "teacher" && (
        <TeachersLayout>
          <Switch>
            <Route exact path="/teachers/home" component={TeachersHome} />
            <Route exact path="/teachers/eventi" component={TeachersEvents} />
            <Route
              exact
              path="/teachers/pagamenti"
              component={TeachersPagamenti}
            />
            <Route
              exact
              path="/teachers/preferenze"
              component={TeachersSettings}
            />
            <Route
              exact
              path="/teachers/supporto"
              component={TeachersSupport}
            />

            {/* Fallback */}
            <Route>
              <Redirect to="/teachers/home" />
            </Route>
          </Switch>
        </TeachersLayout>
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
