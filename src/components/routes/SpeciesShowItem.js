import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'antd/lib/card';
import { Row, Col } from 'antd';
import axios from 'axios';
import arrow from '../../play-button.svg';

class SpeciesShowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      loading: true
    };
  }

  componentDidMount() {
    axios.get(`https://swapi.co/api${this.props.match.url}`).then(response => {
      this.setState({
        item: response.data,
        loading: false
      });
    });
  }
  render() {
    const {
      name,
      classification,
      designation,
      average_height,
      average_lifespan,
      language
    } = this.state.item;
    return (
      <Row type="flex" justify="center">
        <br />
        <Col type="flex" justify="center">
          <Card
            loading={this.state.loading}
            title={name}
            className="content-box content-people-species-box"
          >
            <Row type="flex" justify="space-around" gutter={4}>
              <Col>
                <p>Classification</p>
                <span>{classification}</span>
              </Col>
              <Col>
                <p>Designation</p>
                <span>{designation}</span>
              </Col>
              <Col>
                <p>Language</p>
                <span>{language}</span>
              </Col>
              <Col>
                <p>Average height (cm)</p>
                <span>{average_height}</span>
              </Col>
              <Col>
                <p>Average lifespan</p>
                <span>{average_lifespan}</span>
              </Col>
            </Row>
          </Card>
          <br />
          <Row type="flex" justify="center">
            <NavLink to="/species">
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

export default SpeciesShowItem;
