import React, { Component } from "react";
import Axios from "axios";
import SpeciesItem from "./SpeciesItem";

class SpeciesHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };
  }

  componentDidMount() {
    Axios.get("https://swapi.co/api/species/")
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
          <SpeciesItem 
            key={index} 
            name={item.name} 
            classification={item.classification} 
            designation={item.designation} 
            average_height={item.average_height} 
            average_lifespan={item.average_lifespan} 
            language={item.language}
          />
        );  
      });
    }
    return <div>{list}</div>;
  }
}

export default SpeciesHolder;
