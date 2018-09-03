import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'antd/lib/card';
import { Row, Col } from 'antd';
import axios from 'axios';
import arrow from '../../play-button.svg';
import { planetImages } from '../../data/imageData';

class PlanetsShowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      planet: planetImages[0],
      planetId: null,
      loading: true
    };
  }

  componentDidMount() {
    axios.get(`https://swapi.co/api${this.props.match.url}/`).then(response => {
      this.setState({
        item: response.data
      });
      // Due to missing data or incoherent response. the following lines allow
      // to display the images for Tatooine and Jakku correctly
      let removedText = this.state.item.url.replace(/\D+/g, '');
      let removeTextToNumber = parseInt(removedText, 10) - 2;
      if (removeTextToNumber === -1) {
        console.log('Tatooine called');
        removeTextToNumber = 59;
        console.log('planetId changed to show corresponding image');
        this.setState({
          planetId: removeTextToNumber,
          loading: false
        });
      } else if (removeTextToNumber === 59) {
        console.log('Jakku called');
        removeTextToNumber = 60;
        console.log('planetId changed to show corresponding image');
        this.setState({
          planetId: removeTextToNumber,
          loading: false
        });
      }
      this.setState({
        planetId: removeTextToNumber,
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
        <Col type="flex" justify="center">
          <Card
            loading={this.state.loading}
            title={name}
            cover={
              !this.state.loading && (
                <img
                  alt={name}
                  src={`${this.state.planet[this.state.planetId].image}`}
                />
              )
            }
            className="content-box content-planet-box content-img-planets"
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
                className="ant-inner ant-individual-inner ant-back-inner"
              />
            </NavLink>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default PlanetsShowItem;
