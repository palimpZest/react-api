import React, { Component } from "react";
import Card from "antd/lib/card";
import { Row, Col } from "antd";

class VehiclesItem extends Component {
  render() {
    const {
      name,
      model,
      manufacturer,
      length,
      crew,
      passengers,
      vehicle_class,
    } = this.props;
    return <Card title={name} className="content-box">
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
      </Card>;
  }
}

export default VehiclesItem;