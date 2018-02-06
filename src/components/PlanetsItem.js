import React, { Component } from "react";
import Card from "antd/lib/card";

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
        <p>rotation_period: {rotation_period}</p>
        <p>orbital_period: {orbital_period}</p>
        <p>diameter: {diameter}</p>
        <p>climate: {climate}</p>
        <p>
          gravity:<br />
          {gravity}
        </p>
        <p>
          terrain:<br />
          {terrain}
        </p>
        <p>surface_water: {surface_water}</p>
        <p>population: {population}</p>
      </Card>;
  }
}

export default PlanetsItem;