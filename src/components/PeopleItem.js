import React, { Component } from "react";
import Card from "antd/lib/card";
import { Col } from "antd";

class PeopleItem extends Component {
  render() {
    const { name, birth_year, gender, height, mass } = this.props;
    return <Col span={6}>
        <Card title={name} className="profile-box">
          <p>Birth Year : {birth_year}</p>
          <p>Gender : {gender}</p>
          <p>Height : {height} </p>
          <p>Mass : {mass}</p>
        </Card>
      </Col>;
  }
}

export default PeopleItem;