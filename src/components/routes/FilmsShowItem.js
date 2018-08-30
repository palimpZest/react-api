import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'antd/lib/card';
import { Row, Col } from 'antd';
import axios from 'axios';
import arrow from '../../play-button.svg';
import { filmImages } from '../../data/imageData';

class FilmsShowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      film: filmImages[0],
      loading: true
    };
  }

  componentDidMount() {
    axios.get(`https://swapi.co/api${this.props.match.url}/`).then(response => {
      this.setState({
        item: response.data,
        loading: false
      });
    });
  }
  render() {
    const { title, episode_id, opening_crawl, release_date } = this.state.item;
    return (
      <Row type="flex" justify="center">
        <br />
        <Col type="flex" justify="center">
          <Card
            loading={this.state.loading}
            title={title}
            cover={
              !this.state.loading && (
                <img
                  alt={title}
                  src={`${this.state.film[episode_id - 1].image}`}
                />
              )
            }
            className="content-box content-film-box"
          >
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
          <br />
          <Row type="flex" justify="center">
            <NavLink to="/films">
              {' '}
              <img
                src={arrow}
                alt="arrow up"
                className="ant-inner ant-back-inner"
              />
            </NavLink>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default FilmsShowItem;
