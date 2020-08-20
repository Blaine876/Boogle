import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, SearchPage } from "./pages";
function Routes() {
  return (
    <Switch>
      <Route path="/search">
        <SearchPage />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
