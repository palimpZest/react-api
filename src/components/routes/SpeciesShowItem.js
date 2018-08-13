import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'antd/lib/card';
import { Row, Col } from 'antd';
import axios from 'axios';

class SpeciesShowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    };
  }

  componentDidMount() {
    axios.get(`https://swapi.co/api${this.props.match.url}`).then(response => {
      this.setState({
        item: response.data
      });
    });
  }
  render() {
    const {
      name,
      classification,
      designation,
      average_height,
      average_lifespan,
      language
    } = this.state.item;
    return (
      <div>
        <Card title={name} className="content-box">
          <Row type="flex" justify="space-around" gutter={4}>
            <Col>
              <p>Classification</p>
              <span>{classification}</span>
            </Col>
            <Col>
              <p>Designation</p>
              <span>{designation}</span>
            </Col>
            <Col>
              <p>Language</p>
              <span>{language}</span>
            </Col>
            <Col>
              <p>Average height (cm)</p>
              <span>{average_height}</span>
            </Col>
            <Col>
              <p>Average lifespan</p>
              <span>{average_lifespan}</span>
            </Col>
          </Row>
        </Card>
        <NavLink to="/species">Back</NavLink>
      </div>
    );
  }
}

export default SpeciesShowItem;
