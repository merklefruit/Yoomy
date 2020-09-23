import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout";

// Routes
import homePage from "./pages/homePage";
import notFound from "./pages/404";
import scopriPage from "./pages/scopriPage";
import ispirazionePage from "./pages/ispirazionePage";
import contattiPage from "./pages/contattiPage";

function Routes() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={homePage} />
        <Route exact path="/scopri" component={scopriPage} />
        <Route exact path="/ispirazione" component={ispirazionePage} />
        <Route exact path="/contatti" component={contattiPage} />

        <Route component={notFound} />
      </Switch>
    </Layout>
  );
}

export default Routes;
