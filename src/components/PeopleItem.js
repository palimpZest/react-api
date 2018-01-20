import React, { Component } from "react";

class PeopleItem extends Component {
  render() {
    return (
      <div>
        <span>Name : {this.props.name}</span>
        <br />
        <span>Birth Year : {this.props.birth_year}</span>
        <br />
        <span>Gender : {this.props.gender}</span>
        <br />
        <span>Height : {this.props.height} </span>
        <br />
        <span>Mass : {this.props.mass}</span>
        <hr />
      </div>
    );
  }
}

export default PeopleItem;
