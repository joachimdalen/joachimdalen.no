import * as React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import AboutMe from "./pages/AboutMe";

const PublicRouter: React.SFC = () => (
  <HashRouter>
    <Switch>
      <Route exact={true} path="/" component={AboutMe} />
    </Switch>
  </HashRouter>
);

export default PublicRouter;
