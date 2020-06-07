import React from 'react';
import { Container, Row, Jumbotron } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import News from './News';
import Home from './Home';
import Generate from './generate/Generate';
import Header from './utils/Header';
import Footer from './utils/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <CustomMain>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <Container>
              <Jumbotron>
                <h1>Haters gonna hate</h1>
                <p>özdil gonna break&apos;em...</p>
              </Jumbotron>
              <Row>
                <News />
              </Row>
            </Container>
          </Route>
          <Route path="/generator">
            <Generate />
          </Route>
        </Switch>
      </CustomMain>
      <Footer />
    </Router>
  );
};

const CustomMain = styled.main`
  min-height: calc(100vh - 116px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
