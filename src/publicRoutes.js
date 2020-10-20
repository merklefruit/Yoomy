import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/layout";

// Marketing Routes
import homePage from "./pages/homePage";
import prezziPage from "./pages/prezziPage";
import contattiPage from "./pages/contattiPage";

// Temporary Routes
import manifestoPage from "./pages/manifestoPage";
import betaPage from "./pages/betaPage";
import homePage2 from "./pages/homePage2";

// Additional Routes
import privacyPage from "./pages/privacyPage";
import termsPage from "./pages/termsPage";

// Auth Routes
import Login from "./components/auth/login";
import Registrati from "./components/auth/registrati";

function Routes() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={homePage2} />
        <Route exact path="/prezzi" component={prezziPage} />
        <Route exact path="/contatti" component={contattiPage} />

        <Route exact path="/beta" component={betaPage} />
        <Route exact path="/manifesto" component={manifestoPage} />
        <Route exact path="/home2" component={homePage} />

        <Route exact path="/privacy" component={privacyPage} />
        <Route exact path="/termini-e-condizioni" component={termsPage} />

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
