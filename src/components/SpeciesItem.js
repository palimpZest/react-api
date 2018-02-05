import React, { Component } from "react";
import Card from "antd/lib/card";
import { Col } from "antd";

class SpeciesItem extends Component {
  render() {
    const { 
      name, 
      classification, 
      designation, 
      average_height, 
      average_lifespan, 
      language 
    } = this.props;
    return <Col span={8}>
        <Card title={name} className="profile-box">
          <p>Classification: {classification}</p>
          <p>Designation: {designation}</p>
          <p>Average height: {average_height}</p>
          <p>Average lifespan: {average_lifespan}</p>
          <p>Language: {language}</p>
        </Card>
      </Col>;
  }
}

export default SpeciesItem;
