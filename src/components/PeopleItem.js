import React, { Component } from "react";

class PeopleItem extends Component {
  render() {
    const { name, birth_year, gender, height, mass } = this.props;
    return (
      <div className="profile-box">
        <h2>Name : {name}</h2>
        <br />
        <span>Birth Year : {birth_year}</span>
        <br />
        <span>Gender : {gender}</span>
        <br />
        <span>Height : {height} </span>
        <br />
        <span>Mass : {mass}</span>
      </div>
    );
  }
}

export default PeopleItem;
