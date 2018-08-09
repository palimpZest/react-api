import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'antd/lib/card';
import { Row, Col } from 'antd';
import axios from 'axios';

class VehiclesShowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://swapi.co/api/vehicles/${this.props.match.params.id}/`)
      .then(response => {
        console.log('response.data');
        console.log(response.data);
        this.setState({
          item: response.data
        });
      });
  }
  render() {
    const {
      id,
      name,
      model,
      manufacturer,
      length,
      crew,
      passengers,
      vehicle_class
    } = this.state.item;
    return (
      <Link to={`/vehicles/${id}`}>
        <Card title={name} className="content-box">
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
      </Link>
    );
  }
}

export default VehiclesShowItem;
