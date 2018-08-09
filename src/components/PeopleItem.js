import React, { Component } from 'react';
import Card from 'antd/lib/card';
import { Row, Col } from 'antd';

class PeopleItem extends Component {
  render() {
    const { name, birth_year, gender, height, mass } = this.props;
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

export default PeopleItem;
