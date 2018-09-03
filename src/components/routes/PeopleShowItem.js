import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'antd/lib/card';
import { Row, Col } from 'antd';
import axios from 'axios';
import arrow from '../../play-button.svg';
import { peopleImages } from '../../data/imageData';

class PeopleShowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      people: peopleImages[0],
      peopleImg: null,
      loading: true
    };
  }

  componentDidMount() {
    axios.get(`https://swapi.co/api${this.props.match.url}/`).then(response => {
      this.setState({
        item: response.data
      });
      Object.values(this.state.people).map(result => {
        if (result.name === this.state.item.name) {
          let linkToImg = result.image;
          this.setState({
            peopleImg: linkToImg,
            loading: false
          });
          console.log(linkToImg);
          return linkToImg;
        }
        return result;
      });
    });
  }
  render() {
    const { name, birth_year, gender, height, mass } = this.state.item;
    return (
      <Row type="flex" justify="center">
        <br />
        <Col type="flex" justify="center">
          <Card
            loading={this.state.loading}
            title={name}
            cover={
              !this.state.loading && (
                <img alt={name} src={`${this.state.peopleImg}`} />
              )
            }
            className="content-box content-img-people content-people-species-box"
          >
            <Row type="flex" justify="space-around" gutter={4}>
              <Col>
                <p>Birth Year</p>
                <span>{birth_year}</span>
                <p>Gender</p>
                <span>{gender}</span>
              </Col>
              <Col>
                <p>Height (cm)</p>
                <span>{height}</span>
                <p>Mass (kg)</p>
                <span>{mass}</span>
              </Col>
            </Row>
          </Card>
          <br />
          <Row type="flex" justify="center">
            <NavLink to="/people/">
              <img
                src={arrow}
                alt="arrow up"
                className="ant-inner ant-individual-inner ant-back-inner"
              />
            </NavLink>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default PeopleShowItem;
