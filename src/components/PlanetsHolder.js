import React, { Component } from "react";
import Axios from "axios";
import PlanetsItem from "./PlanetsItem";

class PlanetsHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };
  }

  componentDidMount() {
    Axios.get("https://swapi.co/api/planets/")
      .then(response => {
        this.setState({
          items: response.data.results,
          loading: false
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
          <PlanetsItem 
            key={index} 
            name={item.name} 
            rotation_period={item.rotation_period} 
            orbital_period={item.orbital_period} 
            diameter={item.diameter} 
            climate={item.climate} 
            gravity={item.gravity} 
            terrain={item.terrain} 
            surface_water={item.surface_water} 
            population={item.population} 
          />
        ); 
      });
    }
    return <div>{list}</div>;
  }
}

export default PlanetsHolder;
