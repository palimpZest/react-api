import React, { Component } from "react";
import Card from "antd/lib/card";

class PeopleItem extends Component {
  render() {
    const { name, birth_year, gender, height, mass } = this.props;
    return <Card title={name} className="profile-box">
          <p>Birth Year : {birth_year}</p>
          <p>Gender : {gender}</p>
          <p>Height : {height} cm</p>
          <p>Mass : {mass} kg</p>
        </Card>;
  }
}

export default PeopleItem;