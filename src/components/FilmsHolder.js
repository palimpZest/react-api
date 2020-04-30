import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "antd";
import { Layout } from "antd";

import FilmsItem from "./FilmsItem";
import { filmImages } from "../data/imageData";
import { BASE_API } from "../constants";

const { Content } = Layout;

const filmCalls = [`${BASE_API}/films/?page=1`];

class PlanetsHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filmImg: filmImages,
      loading: true,
    };
  }

  componentDidMount() {
    axios
      .get(filmCalls)
      .then((response) => {
        let sortedItems = response.data.results.sort((a, b) => {
          return a.episode_id - b.episode_id;
        });
        this.setState({
          items: sortedItems,
        });
      })
      .then(() => {
        this.setState({ loading: false });
      })
      .catch((error) => console.log(error));
  }

  render() {
    let indices = this.state.items.map((index) => {
      let removedText = index.url.replace(/\D+/g, "");
      return removedText;
    });
    let list;
    this.state.loading
      ? (list = (
          <img
            className="loading-icon"
            src="https://media.giphy.com/media/TZf4ZyXb0lXXi/giphy.gif"
            alt="loading icon"
          />
        ))
      : (list = this.state.items.map((item, index) => {
          return (
            <Col key={index} xs={24} sm={18} md={16} lg={12} xl={8} xxl={7}>
              {this.state.filmImg.map((film) => {
                return (
                  <FilmsItem
                    key={index}
                    id={indices[index]}
                    image={film[index].image}
                    title={item.title}
                    episode_id={item.episode_id}
                    opening_crawl={item.opening_crawl}
                    release_date={item.release_date}
                  />
                );
              })}
            </Col>
          );
        }));

    return (
      <Content>
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
