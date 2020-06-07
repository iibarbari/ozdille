import React from 'react';

import styled from 'styled-components';

const Footer = () => {
  return (
    <CustomFooter className="bg-dark pt-3 pb-3">
      <a href="https://github.com/iibarbari" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github fa-2x" aria-hidden="true" />
      </a>
      <a
        href="https://www.linkedin.com/in/ilknur-%C3%BCltan%C4%B1r/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-linkedin fa-2x" aria-hidden="true" />
      </a>
    </CustomFooter>
  );
};

const CustomFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  a {
    color: white;
  }
`;

export default Footer;
