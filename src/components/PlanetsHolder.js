import React, { Component } from "react";
import axios from "axios";
import PlanetsItem from "./PlanetsItem";
import { Row, Col } from "antd";
import { Layout } from "antd";
const { Content } = Layout;

class PlanetsHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };
  }

  componentDidMount() {
  let that = this;    
   axios.all([
     axios.get("https://swapi.co/api/planets/?page=1"),
     axios.get("https://swapi.co/api/planets/?page=2"),
     axios.get("https://swapi.co/api/planets/?page=3"),
     axios.get("https://swapi.co/api/planets/?page=4"),
     axios.get("https://swapi.co/api/planets/?page=5"),
     axios.get("https://swapi.co/api/planets/?page=6"),
     axios.get("https://swapi.co/api/planets/?page=7")
   ])
  .then(axios.spread(function(
      page1,
      page2,
      page3,
      page4,
      page5,
      page6,
      page7
    ) {
      let allItems = page1.data.results.concat(
        page2.data.results, 
        page3.data.results, 
        page4.data.results, 
        page5.data.results, 
        page6.data.results, 
        page7.data.results);
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
          <Col xs={24} sm={16} md={12} lg={8} xl={6} xxl={6}>
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
          </Col>
        ); 
      });
    }
    return <Content style={{ padding: '0 10px' }} >
        <Row type="flex" justify="space-around" gutter={{ xs: 0, sm: 16, md: 4, lg: 4, xl: 8, xxl: 0 }}>
          {list}
        </Row>
      </Content>;
  }
}

export default PlanetsHolder;
