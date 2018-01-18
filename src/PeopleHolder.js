import React, { Component } from "react";
import Axios from "axios";

class PeopleHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    Axios.get("https://swapi.co/api/people/")
      .then(response => {
        this.setState({ items: response.data.results });
        console.log(response.data.results);
      })
      .catch(function(error) {
        console.log("error");
      });
  }

  render() {
    return (
      <div>
        <h1>This is the people holder</h1>
        {this.state.items.map(item => {
          return (
            <section>
              <div>Name : {item.name}</div>
              <div>Birth Year : {item.birth_year}</div>
              <div>Gender : {item.gender}</div>
              <div>Height : {item.height}</div>
              <div>Mass : {item.mass}</div>
              <hr />
            </section>
          );
        })}
      </div>
    );
  }
}

export default PeopleHolder;
