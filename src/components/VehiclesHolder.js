import React, { Component } from "react";
import axios from "axios";
import VehiclesItem from "./VehiclesItem";
import { Row, Col } from "antd";
import { Layout } from "antd";
const { Content } = Layout;

class VehiclesHolder extends Component {
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
        axios.get("https://swapi.co/api/vehicles/?page=1"),
        axios.get("https://swapi.co/api/vehicles/?page=2"),
        axios.get("https://swapi.co/api/vehicles/?page=3"),
        axios.get("https://swapi.co/api/vehicles/?page=4")
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
      list = (
        <div>
          <img
            className="loading-icon"
            src="https://media.giphy.com/media/TZf4ZyXb0lXXi/giphy.gif"
            alt="loading icon"
          />
        </div>
      );
    } else {
      list = this.state.items.map((item, index) => {
        return <Col xs={24} sm={12} md={10} lg={8} xl={8} xxl={4}>
            <VehiclesItem key={index} name={item.name} model={item.model} manufacturer={item.manufacturer} length={item.length} crew={item.crew} passengers={item.passengers} vehicle_class={item.vehicle_class} />
          </Col>;
      });
    }
    return <Content style={{ padding: "0 10px" }}>
        <Row type="flex" justify="space-around" gutter={{ xs: 0, sm: 16, md: 4, lg: 4, xl: 8, xxl: 0 }}>
          {list}
        </Row>
      </Content>;
  }
}

export default VehiclesHolder;