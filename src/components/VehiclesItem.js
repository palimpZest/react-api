import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'antd/lib/card';
import { Row, Col } from 'antd';

class VehiclesItem extends Component {
  render() {
    const {
      id,
      name,
      image,
      model,
      manufacturer,
      length,
      crew,
      passengers,
      vehicle_class
    } = this.props;
    return (
      <Link to={`/vehicles/${id}`}>
        <Card
          title={name}
          cover={image && <img alt={name} src={`${image}`} />}
          className="content-box ant-card-vehicle-starship-cover content-img-vehicles vehicles-img-filter"
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
      </Link>
    );
  }
}

export default VehiclesItem;
