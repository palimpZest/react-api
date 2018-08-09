import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div>
        <div>Page not found !</div>
        <NavLink to="/">Home</NavLink>
      </div>
    );
  }
}

export default NotFound;
