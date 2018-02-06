import React, { Component } from "react";
import Card from "antd/lib/card";
import { Row, Col } from "antd";

class PlanetsItem extends Component {
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
    } = this.props;
    return <Card title={name} className="content-box">
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
      </Card>;
  }
}

export default PlanetsItem;