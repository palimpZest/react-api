import React, { Component } from 'react';
import axios from 'axios';
import PeopleItem from './PeopleItem';
import { peopleImages } from '../data/imageData';
import { Row, Col } from 'antd';
import { Layout } from 'antd';
const { Content } = Layout;

let BASE_API = 'https://swapi.co/api';

const peopleCalls = [
  axios.get(`${BASE_API}/people/?page=1`),
  axios.get(`${BASE_API}/people/?page=2`),
  axios.get(`${BASE_API}/people/?page=3`),
  axios.get(`${BASE_API}/people/?page=4`),
  axios.get(`${BASE_API}/people/?page=5`),
  axios.get(`${BASE_API}/people/?page=6`),
  axios.get(`${BASE_API}/people/?page=7`),
  axios.get(`${BASE_API}/people/?page=8`),
  axios.get(`${BASE_API}/people/?page=9`)
];

class PeopleHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      peopleImg: peopleImages,
      loading: true
    };
  }

  componentDidMount() {
    axios
      .all(peopleCalls)
      .then(
        axios.spread(
          (page1, page2, page3, page4, page5, page6, page7, page8, page9) => {
            let allItems = page1.data.results.concat(
              page2.data.results,
              page3.data.results,
              page4.data.results,
              page5.data.results,
              page6.data.results,
              page7.data.results,
              page8.data.results,
              page9.data.results
            );
            this.setState({ items: allItems, loading: false });
          }
        )
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
          <Col key={index} xs={22} sm={12} md={8} lg={7} xl={6} xxl={5}>
            {this.state.peopleImg.map(people => {
              return (
                <PeopleItem
                  key={index}
                  id={indices[index]}
                  image={people[index].image}
                  name={item.name}
                  birth_year={item.birth_year}
                  gender={item.gender}
                  height={item.height}
                  mass={item.mass}
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

export default PeopleHolder;
