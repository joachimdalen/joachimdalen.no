import * as React from "react";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
const Main: React.SFC = () => (
  <HashRouter>
    <div className="jd-main">
      <header className="jd-header">
        <div className="jd-header-top">
          <div className="jd-header-brand">Joachim Dalen</div>
          <div className="jd-header-socials">
            <ul>
              <li>Find me online:</li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-github" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-codepen" />
                  Codepen
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-envelope" />
                  Email
                </a>
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
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/about" component={AboutMe} />
        </Switch>
      </div>
    </div>
  </HashRouter>
);

export default Main;
