import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'antd/lib/card';
import { Row, Col } from 'antd';
import axios from 'axios';
import arrow from '../../play-button.svg';

class StarshipsShowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
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
    const {
      name,
      model,
      manufacturer,
      length,
      crew,
      passengers,
      cargo_capacity,
      consumables,
      hyperdrive_rating,
      MGLT,
      starship_class
    } = this.state.item;
    return (
      <Row type="flex" justify="center">
        <br />
        <Col type="flex" justify="center">
          <Card
            loading={this.state.loading}
            title={name}
            className="content-box content-starship-box"
          >
            <Row type="flex" justify="space-around" gutter={8}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={32}>
                <p>Model</p>
                <span>{model}</span>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={32}>
                <p>Manufacturer</p>
                <span>{manufacturer}</span>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={32}>
                <p>Starship class</p>
                <span>{starship_class}</span>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={10}>
                <p>Hyperdrive rating</p>
                <span>{hyperdrive_rating}</span>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={10}>
                <p>length</p>
                <span>{length}</span>v
              </Col>
              <Col>
                <p>Cargo_capacity</p>
                <span>{cargo_capacity}</span>
              </Col>
              <Col>
                <p>Consumables</p>
                <span>{consumables}</span>
              </Col>
              <Col>
                <p>MGLT</p>
                <span>{MGLT}</span>
              </Col>
              <Col>
                <p>Crew</p>
                <span>{crew}</span>
              </Col>
              <Col>
                <p>Passengers</p>
                <span>{passengers}</span>
              </Col>
            </Row>
          </Card>
          <br />
          <Row type="flex" justify="center">
            <NavLink to="/starships">
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

export default StarshipsShowItem;