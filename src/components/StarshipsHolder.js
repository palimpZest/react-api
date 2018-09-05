import React, { Component } from 'react';
import axios from 'axios';
import StarshipsItem from './StarshipsItem';
import { starshipImages } from '../data/imageData';
import { Row, Col } from 'antd';
import { Layout } from 'antd';
const { Content } = Layout;

let BASE_API = 'https://swapi.co/api';

const starshipCalls = [
  axios.get(`${BASE_API}/starships/?page=1`),
  axios.get(`${BASE_API}/starships/?page=2`),
  axios.get(`${BASE_API}/starships/?page=3`),
  axios.get(`${BASE_API}/starships/?page=4`)
];

class StarshipsHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      starshipImg: starshipImages,
      loading: true
    };
  }

  componentDidMount() {
    axios
      .all(starshipCalls)
      .then(
        axios.spread((page1, page2, page3, page4) => {
          let allItems = page1.data.results.concat(
            page2.data.results,
            page3.data.results,
            page4.data.results
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
            <Col key={index} xs={24} sm={24} md={14} lg={12} xl={12} xxl={8}>
              {this.state.starshipImg.map(starship => {
                return (
                  <StarshipsItem
                    key={index}
                    id={indices[index]}
                    image={starship[index].image}
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
          gutter={{ xs: 8, sm: 16, md: 8, lg: 8, xl: 8, xxl: 8 }}
        >
          {list}
        </Row>
      </Content>
    );
  }
}

export default StarshipsHolder;
