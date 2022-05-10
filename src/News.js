import React, { useState, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import styled from 'styled-components';
import sanitizeHtml from 'sanitize-html';
import getNews from './helpers/getNews';

const News = () => {
  const [articleData, setArticleData] = useState([]);

  const parseISOString = (s) => {
    const b = s.split(/\D+/);
    return `${b[2]}/${b[1]}/${b[0]}`;
  };

  useEffect(() => {
    getNews()
      .then((response) => setArticleData(response.data.articles))
      .then(() => console.log(articleData))
      .catch((err) => console.log(err));
  }, []);

  return articleData.map(({ title, url, urlToImage, description, publishedAt, content }, index) => (
    <CustomCard sm={6} key={index}>
      <Card>
        <Card.Header as="h5" className="card-title font-weight-bold mb-2">
          {title}
        </Card.Header>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Card.Img className="rounded-0" variant="top" src={urlToImage} alt="" />
        </a>
        <Card.Body>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Card.Text>{sanitizeHtml(description)}</Card.Text>
          </a>
          <br />
          <Card.Text>{parseISOString(publishedAt)}</Card.Text>
        </Card.Body>
      </Card>
    </CustomCard>
  ));
};

const CustomCard = styled(Col)`
  .card {
    margin: 20px 0;
    border-radius: 0 !important;
    .card-title {
      margin: 0 !important;
    }
    a:link,
    a:visited,
    a:hover,
    a:active {
      text-decoration: none;
      color: #000;
    }
  }
`;

export default News;
