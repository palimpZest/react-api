import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return  (
        <div>
            <Link to="/About">About</Link>
            <hr/>
            <div>Hi there, this is the home section!</div>
        </div>
        );
    }
}

export default Home;