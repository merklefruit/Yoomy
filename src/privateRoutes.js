import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Layout
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

function PrivateRoutes({ fetchTeachers, fetchCourses, user }) {
  useEffect(() => {
    fetchTeachers();
    fetchCourses();
  });

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

            <Route>
              <Redirect to="/teachers/home" />
            </Route>
          </Switch>
        </TeachersLayout>
      )}

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
