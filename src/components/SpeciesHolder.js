import React, { Component } from "react";
import axios from "axios";
import SpeciesItem from "./SpeciesItem";
import { Row, Col } from "antd";

class SpeciesHolder extends Component {
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
        axios.get("https://swapi.co/api/species/?page=1"),
        axios.get("https://swapi.co/api/species/?page=2"),
        axios.get("https://swapi.co/api/species/?page=3"),
        axios.get("https://swapi.co/api/species/?page=4")
      ])
      .then(axios.spread(function(
          page1,
          page2,
          page3,
          page4
        ) {
          let allItems = page1.data.results.concat(
            page2.data.results,
            page3.data.results,
            page4.data.results
          );
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
        return (
          <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
            <SpeciesItem 
              key={index} 
              name={item.name} 
              classification={item.classification} 
              designation={item.designation} 
              average_height={item.average_height} 
              average_lifespan={item.average_lifespan} 
              language={item.language}
            />
          </Col>
        );  
      });
    }
    return <Row type="flex" justify="space-around" gutter={{ xs: 0, sm: 16, md: 4, lg: 4, xl: 8, xxl: 0 }}>
        {list}
      </Row>;
  }
}

export default SpeciesHolder;
