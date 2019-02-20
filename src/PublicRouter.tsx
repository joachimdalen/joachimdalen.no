import * as React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from './pages/Home';

const PublicRouter: React.SFC = () => (
  <HashRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  </HashRouter>
);

export default PublicRouter;
