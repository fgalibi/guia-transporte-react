import React from "react";
import NavItem from "./NavItem";
import styled from "styled-components";
import { primary } from "../../assets/css/variables";

const NavBar = styled.nav`
  padding: 1em;
  align-items: center;
  justify-content: center;
  && a {
    color: ${primary};
    font-weight: 600;
  }
  && a.active {
    background-color: ${primary};
    font-weight: 400;
  }
`;

const Nav = () => {
  return (
    <div className="container">
      <NavBar>
        <ul className="nav nav-pills">
          <li className="active">
            <NavItem title="Ônibus" icon="bus" active="active" link="onibus" />
          </li>
          <li>
            <NavItem title="Lotação" icon="bus" link="lotacao" />
          </li>
        </ul>
      </NavBar>
    </div>
  );
};

export default Nav;
