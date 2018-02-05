import React, { Component } from "react";
import axios from "axios";
import StarshipsItem from "./StarshipsItem";
import { Row } from "antd";

class StarshipsHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };
  }

  componentDidMount() {
    let that = this;    
    axios
      .all([
        axios.get("https://swapi.co/api/starships/?page=1"),
        axios.get("https://swapi.co/api/starships/?page=2"),
        axios.get("https://swapi.co/api/starships/?page=3"),
        axios.get("https://swapi.co/api/starships/?page=4")
      ])
      .then(axios.spread(function(page1, page2, page3, page4) {
        let allItems = page1.data.results.concat(
          page2.data.results, 
          page3.data.results, 
          page4.data.results);
        that.setState({ items: allItems, loading: false });
      }))
      .catch(error => console.log(error));
  }
  
  render() {
    let list;

    if (this.state.loading) {
      list = <div>
          <img className="loading-icon" src="https://media.giphy.com/media/TZf4ZyXb0lXXi/giphy.gif" alt="loading icon" />
        </div>;
    } else {
      list = this.state.items.map((item, index) => {
        return <StarshipsItem 
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
    });
    }
    return <Row>{list}</Row>;
  }
}

export default StarshipsHolder;
