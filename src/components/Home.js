import React, { Component } from "react";
import logo from "../r2-d2.png";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React SWAPI</h1>
        </header>
        <h2>Hi, there!</h2>
        <h3 className="welcome-message">
          This little fun project shows React Router and an API calls in action.
          <br /> Feel free to browse all the sections!
        </h3>
      </div>
    );
  }
}

export default Home;
