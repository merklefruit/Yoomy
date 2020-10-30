import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Layout
import TeachersLayout from "../components/_teachers/teachersLayout";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

// API calls
import { fetchCourses, fetchTeachers } from "../actions";

// Teacher Routes (should be protected)
import FullPageSpinner from "../components/fullPageSpinner";
import TeachersHome from "../pages/_teachers/teachersHome";
import TeachersEvents from "../pages/_teachers/teachersEvents";
import TeachersPagamenti from "../pages/_teachers/teachersPagamenti";
import TeachersSettings from "../pages/_teachers/teachersSettins";
import TeachersSupport from "../pages/_teachers/teachersSupport";

function TeacherRoutes({ fetchTeachers, fetchCourses, teacher }) {
  useEffect(() => {
    fetchTeachers();
    fetchCourses();
  });

  // Analytics tracking
  useEffect(() => {
    if (teacher & (process.env.REACT_APP_NODE_ENV !== "development")) {
      window.splitbee.user.set({ displayName: teacher.name });
      window.splitbee.user.set({ email: teacher.email });
      window.splitbee.user.set({ userKind: "teacher" });
    }
  }, [teacher]);

  return (
    <>
      {/* TEACHER ROUTES */}
      {teacher && (
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

      {/* Only shown if isAuthenticated AND we don't have teacher object yet. */}
      {!teacher && <FullPageSpinner />}
    </>
  );
}

TeacherRoutes.propTypes = {
  fetchTeachers: PropTypes.func.isRequired,
  fetchCourses: PropTypes.func.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  teacher: state.auth.teacher,
});

export default connect(mapStateToProps, { fetchTeachers, fetchCourses })(
  TeacherRoutes
);
