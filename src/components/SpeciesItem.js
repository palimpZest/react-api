import React, { Component } from "react";
import Card from "antd/lib/card";

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
    return ( 
      <Card title={name} className="content-box">
        <p>Classification: {classification}</p>
        <p>Designation: {designation}</p>
        <p>Average height: {average_height}</p>
        <p>Average lifespan: {average_lifespan}</p>
        <p>Language: {language}</p>
      </Card>
    );
  }
}

export default SpeciesItem;
