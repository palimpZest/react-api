import React, { Component } from "react";
import logo from "../r2-d2.png";
import { Layout } from "antd";
const { Content } = Layout;

class Home extends Component {
  render() {
    return <Content style={{ padding: "0" }}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="greeting">Hi, there!</h2>
            <h2 className="greeting">Welcome to</h2>
            <h2 className="App-title">React SWAPI</h2>
            <br />
            <br />
            <p className="welcome-message">
              This fun little project shows React Router, API calls, and Ant
              Design in action.
            </p>
            <br />
            <br />
            <p className="welcome-message">
              Feel free to browse all the sections!
            </p>
            <br />
            <br />
          </header>
          <img className="warp-img" src="https://media.giphy.com/media/DxRHMazcVPHJS/giphy.gif" alt="warp in space gif" />
          <br />
          <br />
          <div className="back-up-message">Push to go back up!</div>
          <br />
          <br />
        </div>
      </Content>;
  }
}

export default Home;
