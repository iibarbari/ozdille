import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import quotes from './quotes';

const Generate = () => {
  const [details, setdetails] = useState({
    noIdeology: 'ataekillik',
    yesIdeology: 'feminizm',
    noSociety: 'ataerkiller',
    yesSociety: 'feministler',
  });
  const [formVisible, setFormVisible] = useState(true);

  return (
    <Container>
      <CustomFormRow className="mt-lg-5 mb-lg-3" visibility={formVisible}>
        <Form>
          <Form.Group>
            <Form.Label>Sevdiğin ideoloji</Form.Label>
            <Form.Control
              type="text"
              name="yesIdeology"
              placeholder="feminizm"
              value={details.yesIdeology}
              onChange={(e) => setdetails({ ...details, [e.target.name]: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sevdiğin ideolojiye inananlara ne denir?</Form.Label>
            <Form.Control
              type="text"
              name="yesSociety"
              placeholder="feministler"
              value={details.yesSociety}
              onChange={(e) => setdetails({ ...details, [e.target.name]: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tilt olduğun ideoloji</Form.Label>
            <Form.Control
              type="text"
              name="noIdeology"
              placeholder="ataerkillik"
              value={details.noIdeology}
              onChange={(e) => setdetails({ ...details, [e.target.name]: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tilt olduğun ideolojiye inananlara ne denir?</Form.Label>
            <Form.Control
              type="text"
              name="noSociety"
              placeholder="ataerkiller"
              value={details.noSociety}
              onChange={(e) => setdetails({ ...details, [e.target.name]: e.target.value })}
            />
          </Form.Group>
          <Button
            variant="primary"
            className="btn-block"
            onClick={(e) => {
              setFormVisible(
                !Object.values(details).filter((el) => el).length === Object.keys(details).length
              );
            }}
            value="özdille"
          >
            özdille
          </Button>
        </Form>
      </CustomFormRow>
      <CustomRow visibility={!formVisible} className="mt-lg-5 mb-lg-3">
        <Col sm={6}>
          <img
            src="https://i.sozcu.com.tr/wp-content/themes/Sozcu_V3/assets/images/yazarlar/yilmaz-ozdil.png?v=7.7.8.5"
            alt=""
          />
        </Col>
        <Col sm={6}>
          {Object.values(details).filter((el) => el).length === Object.keys(details).length &&
            quotes(details)
              .join('  *  ')
              .split(/\s\s/)
              .map((quote, index) => {
                return <p key={index}>{quote}</p>;
              })}
        </Col>
      </CustomRow>
    </Container>
  );
};

const CustomRow = styled(Row)`
  text-transform: capitalize;
  display: ${(props) => (props.visibility ? 'flex' : 'none')};
  [class^='col-']:first-child {
    display: flex;
    align-items: center;
  }
`;

const CustomFormRow = styled(Row)`
  display: ${(props) => (props.visibility ? 'flex' : 'none')};
`;

export default Generate;
