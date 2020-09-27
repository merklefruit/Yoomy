import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AppLayout from "./components/_app/appLayout";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

// API calls
import { fetchTeachers } from "./actions";

// App Routes (should be protected)
import PerTePage from "./pages/_app/perTePage";
import IstruttoriPage from "./pages/_app/istruttoriPage";
import AccountPage from "./pages/_app/accountPage";
import CalendarioPage from "./pages/_app/calendarioPage";
import IstruttorePage from "./pages/_app/istruttorePage";

function PrivateRoutes({ fetchTeachers }) {
  useEffect(() => {
    fetchTeachers();
  });

  return (
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
  );
}

PrivateRoutes.propTypes = {
  fetchTeachers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { fetchTeachers })(PrivateRoutes);
