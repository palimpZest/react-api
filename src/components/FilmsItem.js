import React, { Component } from 'react';
import Card from 'antd/lib/card';
import { Row, Col } from 'antd';

class FilmsItem extends Component {
  render() {
    const { title, episode_id, opening_crawl, release_date } = this.props;
    return (
      <Card title={title} className="content-box">
        <Row type="flex" justify="space-around" gutter={16}>
          <Col>
            <p>Episode</p>
            <span>{episode_id}</span>
          </Col>
          <Col>
            <p>Release date</p>
            <span>{release_date}</span>
          </Col>
          <Col xs={20} sm={20} md={18} lg={22} xl={30} xxl={17}>
            <p>Opening crawl</p>
            <span>{opening_crawl}</span>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default FilmsItem;
