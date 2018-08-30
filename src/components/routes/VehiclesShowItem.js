import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'antd/lib/card';
import { Row, Col } from 'antd';
import axios from 'axios';
import arrow from '../../play-button.svg';
import { vehicleImages } from '../../data/imageData';

class VehiclesShowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      vehicle: vehicleImages[0],
      vehicleImg: null,
      loading: true
    };
  }

  componentDidMount() {
    axios.get(`https://swapi.co/api${this.props.match.url}/`).then(response => {
      this.setState({
        item: response.data
      });
      Object.values(this.state.vehicle).map(result => {
        if (result.name === this.state.item.name) {
          let linkToImg = result.image;
          this.setState({
            vehicleImg: linkToImg,
            loading: false
          });
          return linkToImg;
        }
        return result;
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
      vehicle_class
    } = this.state.item;
    return (
      <Row type="flex" justify="center">
        <br />
        <Col type="flex" justify="center">
          <Card
            loading={this.state.loading}
            title={name}
            cover={
              !this.state.loading && (
                <img alt={name} src={`${this.state.vehicleImg}`} />
              )
            }
            className="content-box ant-card-vehicle-starship-cover content-img-vehicles content-vehicle-box"
          >
            <Row type="flex" justify="space-around" gutter={4}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={32}>
                <p>Model</p>
                <span>{model}</span>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={32}>
                <p>Manufacturer</p>
                <span>{manufacturer}</span>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={32}>
                <p>Vehicle class</p>
                <span>{vehicle_class}</span>
              </Col>
              <Col>
                <p>Length (m)</p>
                <span>{length}</span>
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
            <NavLink to="/vehicles">
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

export default VehiclesShowItem;
