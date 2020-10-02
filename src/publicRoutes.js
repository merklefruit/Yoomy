import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/layout";

// Marketing Routes
import homePage from "./pages/homePage";
import manifestoPage from "./pages/manifestoPage";
import ispirazionePage from "./pages/ispirazionePage";
import contattiPage from "./pages/contattiPage";
import BetaPage from "./pages/betaPage";

// Auth Routes
import Login from "./components/auth/login";
import Registrati from "./components/auth/registrati";

function Routes() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={homePage} />
        <Route exact path="/manifesto" component={manifestoPage} />
        <Route exact path="/ispirazione" component={ispirazionePage} />
        <Route exact path="/contatti" component={contattiPage} />

        <Route exact path="/beta" component={BetaPage} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/registrati" component={Registrati} />

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Routes;
