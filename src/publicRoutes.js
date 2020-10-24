import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/layout";

// Marketing Routes
import homePage from "./pages/_marketing/homePage";
import homePage2 from "./pages/_marketing/homePage2";
import prezziPage from "./pages/_marketing/prezziPage";
import contattiPage from "./pages/_marketing/contattiPage";
import manifestoPage from "./pages/_marketing/manifestoPage";
import betaPage from "./pages/_marketing/betaPage";

// Additional Routes
import privacyPage from "./pages/privacyPage";
import termsPage from "./pages/termsPage";
import OpenStartup from "./pages/openStartup";

// Auth Components
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
        <Route exact path="/open" component={OpenStartup} />

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
