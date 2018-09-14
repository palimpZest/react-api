import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'antd/lib/card';
import { Row, Col } from 'antd';

class FilmsItem extends Component {
  render() {
    const {
      id,
      title,
      image,
      episode_id,
      opening_crawl,
      release_date
    } = this.props;
    return (
      <Link to={`/films/${id}`}>
        <Card
          loading={!image}
          title={title}
          cover={image && <img alt={title} src={`${image}`} />}
          className="content-box content-img-films films-img-filter"
        >
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
      </Link>
    );
  }
}

export default FilmsItem;
