import React, { Component } from "react";
import Card from "antd/lib/card";
import { Row, Col } from "antd";

class StarshipsItem extends Component {
  render() {
    const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    hyperdrive_rating,
    MGLT,
    starship_class
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
      </Card>;
  }
}

export default StarshipsItem;
