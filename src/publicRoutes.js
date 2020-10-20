import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/layout";

// Marketing Routes
import homePage from "./pages/homePage";
import prezziPage from "./pages/prezziPage";
import contattiPage from "./pages/contattiPage";

// Temporary Routes
import manifestoPage from "./pages/manifestoPage";
import BetaPage from "./pages/betaPage";
import HomePage2 from "./pages/homePage2";

// Additional Routes
import PrivacyPage from "./pages/privacyPage";
import TermsPage from "./pages/termsPage";

// Auth Routes
import Login from "./components/auth/login";
import Registrati from "./components/auth/registrati";

function Routes() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={homePage} />
        <Route exact path="/prezzi" component={prezziPage} />
        <Route exact path="/contatti" component={contattiPage} />

        <Route exact path="/beta" component={BetaPage} />
        <Route exact path="/manifesto" component={manifestoPage} />

        <Route exact path="/privacy" component={PrivacyPage} />
        <Route exact path="/termini-e-condizioni" component={TermsPage} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/registrati" component={Registrati} />

        <Route exact path="/2" component={HomePage2} />

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Routes;
