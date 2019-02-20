import * as React from "react";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
// import avatar from "src/images/me.jpeg";
const Main: React.SFC = () => (
  <HashRouter>
    <Switch>
      <div className="jd-main">
        <header className="jd-header">
          <div className="jd-header-top">
            <div className="jd-header-brand">Joachim Dalen</div>
            <div className="jd-header-socials">
              <ul>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Codepen</a>
                </li>
                <li>
                  <a href="#">Email</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="jd-header-bottom">
            <div className="jd-header-menu">
              <NavLink
                activeClassName="active"
                className="jd-header-menu-item"
                to="/"
                exact={true}
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="active"
                className="jd-header-menu-item"
                to="/about"
              >
                About Me
              </NavLink>
            </div>
          </div>
        </header>

        <div className="jd-content">
          <Route exact={true} path="/" component={Home} />
        </div>
      </div>
    </Switch>
  </HashRouter>
);

export default Main;
