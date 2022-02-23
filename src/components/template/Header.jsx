import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { primary, secondary } from "../../assets/css/variables";

export const Title = styled.h1`
  color: ${primary};
`;

export const Logo = styled.span`
  vertical-align: -0.125em;
  color: ${secondary};
`;

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
        >
          <Logo className="me-2 fs-2">
            <i className="fa fa-map"></i>
          </Logo>

          <Title>Guia de Transporte</Title>
        </Link>
      </header>
    </div>
  );
};

export default Header;
