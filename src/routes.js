import React from "react";
import { Switch, Route } from "react-router-dom";

// Marketing Routes
import homePage from "./pages/homePage";
import notFound from "./pages/404";
import scopriPage from "./pages/scopriPage";
import ispirazionePage from "./pages/ispirazionePage";
import contattiPage from "./pages/contattiPage";

// Auth Routes
import Login from "./components/auth/login";
import Registrati from "./components/auth/registrati";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={homePage} />
        <Route exact path="/scopri" component={scopriPage} />
        <Route exact path="/ispirazione" component={ispirazionePage} />
        <Route exact path="/contatti" component={contattiPage} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/registrati" component={Registrati} />

        <Route component={notFound} />
      </Switch>
    </>
  );
}

export default Routes;
