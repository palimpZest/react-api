import React, { Component } from "react";
import Card from "antd/lib/card";
import { Col } from "antd";

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
    return <Col span={8}>
        <Card title={name} className="planet-box">
          <p>rotation_period: {rotation_period}</p>
          <p>orbital_period: {orbital_period}</p>
          <p>diameter: {diameter}</p>
          <p>climate: {climate}</p>
          <p>gravity: {gravity}</p>
          <p>terrain: {terrain}</p>
          <p>surface_water: {surface_water}</p>
          <p>population: {population}</p>
        </Card>
      </Col>;
  }
}

export default PlanetsItem;