import React, { Component } from 'react';
import axios from 'axios';
import FilmsItem from './FilmsItem';
import { Row, Col } from 'antd';
import { Layout } from 'antd';
const { Content } = Layout;

let BASE_API = 'https://swapi.co/api';

const filmCalls = [`${BASE_API}/films/?page=1`];

class PlanetsHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };
  }

  componentDidMount() {
    axios
      .get(filmCalls)
      .then(response => {
        this.setState({
          items: response.data.results,
          loading: false
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    let indices = this.state.items.map(index => {
      let removedText = index.url.replace(/\D+/g, '');
      return removedText;
    });
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
        return (
          <Col key={index} xs={24} sm={18} md={16} lg={12} xl={8} xxl={7}>
            <FilmsItem
              id={indices[index]}
              title={item.title}
              episode_id={item.episode_id}
              opening_crawl={item.opening_crawl}
              release_date={item.release_date}
            />
          </Col>
        );
      });
    }
    return (
      <Content style={{ padding: '0 10px' }}>
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
