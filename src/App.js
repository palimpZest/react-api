import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PeopleHolder from "./components/PeopleHolder";
import SpeciesHolder from "./components/SpeciesHolder";
import "./App.css";

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
                  <NavLink to="/about" activeClassName="selected">
                    About
                  </NavLink>
                </li>
              </ul>
            </header>
          </Switch>
          <Route exact path="/" component={Home} />
          <Route path="/people" component={PeopleHolder} />
          <Route path="/species" component={SpeciesHolder} />
          <Route path="/about" component={About} />
        </nav>
      </BrowserRouter>;
  }
}

export default App;
