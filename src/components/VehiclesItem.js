import React, { Component } from "react";
import Card from "antd/lib/card";

class VehiclesItem extends Component {
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
      vehicle_class,
    } = this.props;
    return <Card title={name} className="content-box">
        <p>Model: {model}</p>
        <p>Manufacturer: {manufacturer}</p>
        <p>Cost_in_credits: {cost_in_credits}</p>
        <p>Length: {length}</p>
        <p>Max atmosphering speed: {max_atmosphering_speed}</p>
        <p>Crew: {crew}</p>
        <p>Passengers: {passengers}</p>
        <p>Vehicle class: {vehicle_class}</p>
      </Card>;
  }
}

export default VehiclesItem;