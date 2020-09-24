import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AppLayout from "./components/_app/appLayout";

// App Routes (should be protected)
import PerTePage from "./pages/_app/perTePage";
import IstruttoriPage from "./pages/_app/istruttoriPage";

function PrivateRoutes() {
  return (
    <AppLayout>
      <Switch>
        <Route exact path="/app/per-te" component={PerTePage} />
        <Route exact path="/app/istruttori" component={IstruttoriPage} />

        <Route>
          <Redirect to="/app/per-te" />
        </Route>
      </Switch>
    </AppLayout>
  );
}

export default PrivateRoutes;
