import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import About from "./About";
import './App.css';

class App extends Component {
  render() {
    return <BrowserRouter>
        <nav>
          <Switch>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/about">
              About
            </NavLink>
            <div>Hello World!</div>
          </Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </nav>
      </BrowserRouter>;
  }
}

export default App;
