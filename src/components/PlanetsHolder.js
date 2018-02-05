import React, { Component } from "react";
import Axios from "axios";
import PlanetsItem from "./PlanetsItem";
import { Row } from "antd";

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
      list = <div>
          <img className="loading-icon" src="https://media.giphy.com/media/TZf4ZyXb0lXXi/giphy.gif" alt="loading icon" />
        </div>;
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
    return <Row>{list}</Row>;
  }
}

export default PlanetsHolder;
