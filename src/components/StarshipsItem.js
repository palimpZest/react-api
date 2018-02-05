import React, { Component } from "react";
import Card from "antd/lib/card";
import { Col } from "antd";

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
    return <Col span={12}>
        <Card title={name} className="starship-box">
          <p>Model: {model}</p>
          <p>Manufacturer: {manufacturer}</p>
          <p>Cost_in_credits: {cost_in_credits}</p>
          <p>length: {length}</p>
          <p>Max_atmosphering_speed: {max_atmosphering_speed}</p>
          <p>Crew: {crew}</p>
          <p>Passengers: {passengers}</p>
          <p>Cargo_capacity: {cargo_capacity}</p>
          <p>Consumables: {consumables}</p>
          <p>Hyperdrive_rating: {hyperdrive_rating}</p>
          <p>MGLT: {MGLT}</p>
          <p>Starship_class: {starship_class}</p>
        </Card>
      </Col>;
  }
}

export default StarshipsItem;
