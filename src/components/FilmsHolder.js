import React, { Component } from "react";
import axios from "axios";
import FilmsItem from "./FilmsItem";
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
    axios.get("https://swapi.co/api/films/?page=1")
        .then(response => {
                this.setState({
                items: response.data.results,
                loading: false
                });
        })
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
        return <Col xs={24} sm={16} md={12} lg={8} xl={6} xxl={6}>
            <FilmsItem 
                key={index} 
                title={item.title} 
                episode_id={item.episode_id} 
                opening_crawl={item.opening_crawl} 
                release_date={item.release_date} 
            />
          </Col>;
      });
    }
    return (
      <Content style={{ padding: "0 10px" }}>
        <Row
          type="flex"
          justify="space-around"
          gutter={{ xs: 0, sm: 16, md: 4, lg: 24, xl: 16, xxl: 0 }}
        >
          {list}
        </Row>
      </Content>
    );
  }
}

export default PlanetsHolder;