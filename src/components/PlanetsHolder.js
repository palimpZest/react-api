import React, { Component } from 'react';
import axios from 'axios';
import PlanetsItem from './PlanetsItem';
import { planetImages } from '../data/imageData';
import { Row, Col } from 'antd';
import { Layout } from 'antd';
const { Content } = Layout;

let BASE_API = 'https://swapi.co/api';

const planetCalls = [
  axios.get(`${BASE_API}/planets/?page=1`),
  axios.get(`${BASE_API}/planets/?page=2`),
  axios.get(`${BASE_API}/planets/?page=3`),
  axios.get(`${BASE_API}/planets/?page=4`),
  axios.get(`${BASE_API}/planets/?page=5`),
  axios.get(`${BASE_API}/planets/?page=6`),
  axios.get(`${BASE_API}/planets/?page=7`)
];

class PlanetsHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      planetImg: planetImages,
      loading: true
    };
  }

  componentDidMount() {
    axios
      .all(planetCalls)
      .then(
        axios.spread((page1, page2, page3, page4, page5, page6, page7) => {
          let allItems = page1.data.results.concat(
            page2.data.results,
            page3.data.results,
            page4.data.results,
            page5.data.results,
            page6.data.results,
            page7.data.results
          );
          this.setState({ items: allItems });
        })
      )
      .then(() => {
        this.setState({ loading: false });
      })
      .catch(error => console.log(error));
  }

  render() {
    let indices = this.state.items.map(index => {
      let removedText = index.url.replace(/\D+/g, '');
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
            <Col key={index} xs={24} sm={16} md={12} lg={8} xl={6} xxl={6}>
              {this.state.planetImg.map(planet => {
                return (
                  <PlanetsItem
                    key={index}
                    id={indices[index]}
                    image={planet[index].image}
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
          gutter={{ xs: 0, sm: 16, md: 4, lg: 4, xl: 8, xxl: 0 }}
        >
          {list}
        </Row>
      </Content>
    );
  }
}

export default PlanetsHolder;
