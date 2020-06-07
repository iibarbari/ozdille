import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <Row>
        <Col sm={12}>
          <img src="https://i.sozcu.com.tr/wp-content/uploads/2016/11/kadro-1.jpg" alt="" />
        </Col>
        <Col sm={12}>
          <Link to="/generator" className="btn btn-success btn-lg">
            özdillen
          </Link>
        </Col>
      </Row>
    </HomeContainer>
  );
};

const HomeContainer = styled(Container)`
  height: 100%;
  .row {
    display: flex;
    [class^='col'] {
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }
  }
`;

export default Home;
