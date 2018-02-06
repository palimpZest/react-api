import React, { Component } from "react";
import logo from "../r2-d2.png";
import { Layout } from "antd";
const { Content } = Layout;

class Home extends Component {
  render() {
    return (
      <Content style={{ padding: '0' }} >
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React SWAPI</h1>
        </header>
        <h2>Hi, there!</h2>
        <h3 className="welcome-message">
          This little fun project shows React Router and API calls in action.
          <br /> Feel free to browse all the sections!
        </h3>
      </div>
      </Content>
      );
  }
}

export default Home;
