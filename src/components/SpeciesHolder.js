import React, { Component } from 'react';
import axios from 'axios';
import SpeciesItem from './SpeciesItem';
import { speciesImages } from '../data/imageData';
import { Row, Col } from 'antd';
import { Layout } from 'antd';
const { Content } = Layout;

let BASE_API = 'https://swapi.co/api';

const speciesCalls = [
  axios.get(`${BASE_API}/species/?page=1`),
  axios.get(`${BASE_API}/species/?page=2`),
  axios.get(`${BASE_API}/species/?page=3`),
  axios.get(`${BASE_API}/species/?page=4`)
];

class SpeciesHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      speciesImg: speciesImages,
      loading: true
    };
  }

  componentDidMount() {
    axios
      .all(speciesCalls)
      .then(
        axios.spread((page1, page2, page3, page4) => {
          let allItems = page1.data.results.concat(
            page2.data.results,
            page3.data.results,
            page4.data.results
          );
          this.setState({ items: allItems, loading: false });
        })
      )
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
          <Col key={index} xs={24} sm={16} md={12} lg={8} xl={6} xxl={5}>
            {this.state.speciesImg.map(species => {
              return (
                <SpeciesItem
                  key={index}
                  id={indices[index]}
                  image={species[index].image}
                  url={item.url}
                  name={item.name}
                  classification={item.classification}
                  designation={item.designation}
                  average_height={item.average_height}
                  average_lifespan={item.average_lifespan}
                  language={item.language}
                />
              );
            })}
          </Col>
        );
      });
    }
    return (
      <Content>
        <Row
          type="flex"
          justify="space-around"
          gutter={{ xs: 0, sm: 16, md: 4, lg: 4, xl: 8, xxl: 0 }}
        >
          {list}
        </Row>
      </Content>
    );
  }
}

export default SpeciesHolder;
