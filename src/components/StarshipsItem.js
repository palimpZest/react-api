import React, { Component } from "react";

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
    return <div className="starship-box">
        <h3>Name : {name}</h3>
        <br />
        <span>Model : {model}</span>
        <br />
        <span>Manufacturer : {manufacturer}</span>
        <br />
        <span>Cost_in_credits : {cost_in_credits}</span>
        <br />
        <span>length : {length}</span>
        <br />
        <span>Max_atmosphering_speed : {max_atmosphering_speed}</span>
        <br />
        <span>Crew : {crew}</span>
        <br />
        <span>Passengers : {passengers}</span>
        <br />
        <span>Cargo_capacity : {cargo_capacity}</span>
        <br />
        <span>Consumables : {consumables}</span>
        <br />
        <span>Hyperdrive_rating : {hyperdrive_rating}</span>
        <br />
        <span>MGLT : {MGLT}</span>
        <br />
        <span>Starship_class : {starship_class}</span>
        <br />
      </div>;
  }
}

export default StarshipsItem;
