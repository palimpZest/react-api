import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../r2-d2.png';
import { Layout } from 'antd';
const { Content } = Layout;

class NotFound extends Component {
  render() {
    return (
      <Content>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="not-found-holder">
              <h2>Sorry, we couldn't find this page!</h2>
              <NavLink to="/">Home</NavLink>
            </div>
          </div>
        </div>
      </Content>
    );
  }
}

export default NotFound;
