import "../../assets/css/components/Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="bi me-2 text-primary fs-2">
            <i className="fa fa-map"></i>
          </span>

          <span className="fs-4">Guia de Transporte</span>
        </Link>
      </header>
    </div>
  );
};

export default Header;
