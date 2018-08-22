import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'antd/lib/card';
import { Row, Col } from 'antd';
import axios from 'axios';
import arrow from '../../play-button.svg';

class PlanetsShowItem extends Component {
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
      rotation_period,
      orbital_period,
      diameter,
      climate,
      gravity,
      terrain,
      surface_water,
      population
    } = this.state.item;
    return (
      <Row type="flex" justify="center">
        <br />
        <Col type="flex" justify="center">
          <Card
            loading={this.state.loading}
            title={name}
            className="content-box content-planet-box"
          >
            <Row type="flex" justify="space-around" gutter={8}>
              <Col>
                <p>Diameter</p>
                <span>{diameter}</span>
              </Col>
              <Col>
                <p>Gravity</p>
                <span>{gravity}</span>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={32}>
                <p>Climate</p>
                <span>{climate}</span>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={32}>
                <p>Terrain</p>
                <span>{terrain}</span>
              </Col>
              <Col>
                <p>Surface water</p>
                <span>{surface_water}</span>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={32}>
                <p>Population</p>
                <span>{population}</span>
              </Col>
              <Col>
                <p>Rotation period</p>
                <span>{rotation_period}</span>
              </Col>
              <Col>
                <p>Orbital period</p>
                <span>{orbital_period}</span>
              </Col>
            </Row>
          </Card>
          <br />
          <Row type="flex" justify="center">
            <NavLink to="/planets">
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

export default PlanetsShowItem;