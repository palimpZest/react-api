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
    return <div className="profile-box">
        <h2>Name : {name}</h2>
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
      </div>;
  }
}

export default SpeciesItem;
