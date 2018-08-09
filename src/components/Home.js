import React, { Component } from 'react';
import logo from '../r2-d2.png';
import { Layout } from 'antd';
const { Content } = Layout;

class Home extends Component {
  render() {
    return (
      <Content style={{ padding: '0' }}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="greeting">Hi, there!</h2>
            <h2 className="greeting">Welcome to</h2>
            <h2 className="greeting">React SWAPI</h2>
            <div className="about">
              <p className="welcome-message">
                This fun little project shows React Router, API calls, and Ant
                Design in action.
              </p>
              <p className="welcome-message">
                Feel free to browse all the sections!
              </p>
            </div>
          </div>
          <img
            className="warp-img"
            src="https://media.giphy.com/media/DxRHMazcVPHJS/giphy.gif"
            alt="warp in space gif"
          />
        </div>
      </Content>
    );
  }
}

export default Home;
