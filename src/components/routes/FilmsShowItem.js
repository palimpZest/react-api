import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'antd/lib/card';
import { Row, Col } from 'antd';
import axios from 'axios';

class FilmsShowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    };
  }

  componentDidMount() {
    axios.get(`https://swapi.co/api${this.props.match.url}/`).then(response => {
      this.setState({
        item: response.data
      });
    });
  }
  render() {
    const { title, episode_id, opening_crawl, release_date } = this.state.item;
    return (
      <div>
        <Card title={title} className="content-box">
          <Row type="flex" justify="space-around" gutter={16}>
            <Col>
              <p>Episode</p>
              <span>{episode_id}</span>
            </Col>
            <Col>
              <p>Release date</p>
              <span>{release_date}</span>
            </Col>
            <Col xs={20} sm={20} md={18} lg={22} xl={30} xxl={17}>
              <p>Opening crawl</p>
              <span>{opening_crawl}</span>
            </Col>
          </Row>
        </Card>
        <NavLink to="/films">Back</NavLink>
      </div>
    );
  }
}

export default FilmsShowItem;
