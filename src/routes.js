import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout";

// Routes
import homePage from "./pages/homePage";
import NotFound from "./pages/404";

function Routes() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={homePage} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default Routes;
