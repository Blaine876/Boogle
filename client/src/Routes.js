import React from "react";

import { Route, Switch } from "react-router-dom";
import { Home, Search } from "./pages";
function Routes() {
  return (
    <Switch>
      <Route path="/search">
        <Search />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
