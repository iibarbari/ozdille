import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <CustomNav bg="dark" variant="dark">
        <NavLink className="navbar-brand" to="/" exact>
          özdillendin
        </NavLink>
        <Nav className="ml-auto">
          <NavLink className="nav-link" to="/" exact>
            Anasayfa
          </NavLink>
          <NavLink className="nav-link" to="/news" exact>
            Haters
          </NavLink>
          <NavLink className="nav-link" to="/generator" exact>
            Generate
          </NavLink>
        </Nav>
      </CustomNav>
    </>
  );
};

const CustomNav = styled(Navbar)`
  box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0.8);
  z-index: 99999;
`;

export default Header;
