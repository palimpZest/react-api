import React, { Component } from "react";
import Axios from "axios";
import PeopleItem from "./PeopleItem";

class PeopleHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };
  }

  componentDidMount() {
    Axios.get("https://swapi.co/api/people/")
      .then(response => {
        this.setState({ 
          items: response.data.results,
          loading : false 
        });
        console.log(response.data.results);
      })
      .catch(function(error) {
        console.log("error");
      });
  }

  render() {
    let list;

    if (this.state.loading) {
      list = (
        <div>
          <div>Loading...</div>
        </div>
      );
    } else {
      list = this.state.items.map((item, index) => {
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
      });
    }
    return (
      <div>{list}</div>
    )
  }
}

export default PeopleHolder;
