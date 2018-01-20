import React, { Component } from "react";
import Axios from "axios";
import StarshipsItem from "./StarshipsItem";

class StarshipsHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };
  }

  componentDidMount() {
    Axios.get("https://swapi.co/api/starships/")
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
        return <div>
                <StarshipsItem 
                    key={index} 
                    name={item.name} 
                    model={item.model} 
                    manufacturer={item.manufacturer} 
                    cost_in_credits={item.cost_in_credits} 
                    length={item.length} 
                    max_atmosphering_speed={item.max_atmosphering_speed} 
                    crew={item.crew} 
                    passengers={item.passengers} 
                    cargo_capacity={item.cargo_capacity} 
                    consumables={item.consumables} 
                    hyperdrive_rating={item.hyperdrive_rating} 
                    MGLT={item.MGLT} 
                    starship_class={item.starship_class} 
                    />;
          </div>;
        
    });
    }
    return <div>{list}</div>;
  }
}

export default StarshipsHolder;
