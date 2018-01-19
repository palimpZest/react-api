import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import PeopleHolder from "./PeopleHolder";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
                  <NavLink to="/about" activeClassName="selected">
                    About
                  </NavLink>
                </li>
              </ul>
            </header>
          </Switch>
          <Route exact path="/" component={Home} />
          <Route path="/people" component={PeopleHolder} />
          <Route path="/about" component={About} />
        </nav>
      </BrowserRouter>
    );
  }
}

export default App;
