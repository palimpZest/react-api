import React, { Component } from 'react';
import Card from 'antd/lib/card';
import { Row, Col } from 'antd';
import axios from 'axios';

class PeopleShowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://swapi.co/api/people/${this.props.match.params.id}/`)
      .then(response => {
        console.log('response.data');
        console.log(response.data);
        this.setState({
          item: response.data
        });
      });
  }
  render() {
    const { name, birth_year, gender, height, mass } = this.state.item;
    return (
      <Card title={name} className="content-box">
        <Row type="flex" justify="space-around" gutter={8}>
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
    );
  }
}

export default PeopleShowItem;
