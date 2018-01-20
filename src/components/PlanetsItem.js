import React, { Component } from "react";

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
    return <div>
        <span>Name : {name}</span>
        <br />
        <span>rotation_period : {rotation_period}</span>
        <br />
        <span>orbital_period : {orbital_period}</span>
        <br />
        <span>diameter : {diameter}</span>
        <br />
        <span>climate : {climate}</span>
        <br />
        <span>gravity : {gravity}</span>
        <br />
        <span>terrain : {terrain}</span>
        <br />
        <span>surface_water : {surface_water}</span>
        <br />
        <span>population : {population}</span>
        <br />
        <hr />
      </div>;
  }
}

export default PlanetsItem;
            