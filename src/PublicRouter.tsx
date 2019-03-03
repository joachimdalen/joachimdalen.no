import * as React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

const PublicRouter: React.SFC = () => (
  <HashRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/about" component={AboutMe} />
    </Switch>
  </HashRouter>
);

export default PublicRouter;
