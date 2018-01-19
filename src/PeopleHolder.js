import React, { Component } from "react";
import Axios from "axios";
import PeopleItem from "./PeopleItem";

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
        {this.state.items.map((item, index) => {
          return (
            <PeopleItem
              key={index}
              name={item.name}
              birth_year={item.birth_year}
              gender={item.gender}
              height={item.height}
              mass={item.mass}
            />
          );
        })}
      </div>
    );
  }
}

export default PeopleHolder;
