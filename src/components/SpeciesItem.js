import React, { Component } from "react";

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
    return <div>
        <span>Name : {name}</span>
        <br />
        <span>Classification : {classification}</span>
        <br />
        <span>Designation : {designation}</span>
        <br />
        <span>Average height : {average_height}</span>
        <br />
        <span>Average ifespan : {average_lifespan}</span>
        <br />
        <span>Language : {language}</span>
        <br />
        <hr />
      </div>;
  }
}

export default SpeciesItem;
