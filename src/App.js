import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PeopleHolder from "./components/PeopleHolder";
import SpeciesHolder from "./components/SpeciesHolder";
import StarshipsHolder from "./components/StarshipsHolder";
import PlanetsHolder from "./components/PlanetsHolder";
import "./App.css";
import { BackTop } from "antd";
import arrow from "./play-button.svg";

class App extends Component {
  render() {
    return <BrowserRouter>
        <nav>
          <Switch>
            <header>
              <ul>
                <li>
                  <NavLink exact to="/" activeClassName="selected">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/people" activeClassName="selected">
                    People
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/species" activeClassName="selected">
                    Species
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/starships" activeClassName="selected">
                    Starships
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/planets" activeClassName="selected">
                    Planets
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName="selected">
                    About
                  </NavLink>
                </li>
              </ul>
              <BackTop>
                <img src={arrow} alt="arrow up" className="ant-back-top-inner" />
              </BackTop>
            </header>
          </Switch>
          <Route exact path="/" component={Home} />
          <Route path="/people" component={PeopleHolder} />
          <Route path="/species" component={SpeciesHolder} />
          <Route path="/starships" component={StarshipsHolder} />
          <Route path="/planets" component={PlanetsHolder} />
          <Route path="/about" component={About} />
        </nav>
      </BrowserRouter>;
  }
}

export default App;
