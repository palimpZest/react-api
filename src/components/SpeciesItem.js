import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'antd/lib/card';
import { Row, Col } from 'antd';

class SpeciesItem extends Component {
  render() {
    const {
      id,
      image,
      name,
      classification,
      designation,
      average_height,
      average_lifespan,
      language
    } = this.props;
    return (
      <Link to={`/species/${id}`}>
        <Card
          title={name}
          cover={<img alt={name} src={`${image}`} />}
          className="content-box"
        >
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
      </Link>
    );
  }
}

export default SpeciesItem;
