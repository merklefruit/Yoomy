import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/layout";

// Marketing Routes
import homePage from "./pages/homePage";
import scopriPage from "./pages/scopriPage";
import ispirazionePage from "./pages/ispirazionePage";
import contattiPage from "./pages/contattiPage";

// Auth Routes
import Login from "./components/auth/login";
import Registrati from "./components/auth/registrati";

// import notFound from "./pages/404";

function Routes() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={homePage} />
        <Route exact path="/scopri" component={scopriPage} />
        <Route exact path="/ispirazione" component={ispirazionePage} />
        <Route exact path="/contatti" component={contattiPage} />

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
