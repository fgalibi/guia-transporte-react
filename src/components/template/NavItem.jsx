import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Item = styled.span`
  margin:auto;
`;

const NavItem = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <Link
      className={`nav-link ${
        splitLocation[1] === props.link ? "active" : ""
      }`}
      aria-current="page"
      to={`/${props.link}`}
    >
      <Item>
        <i className={`fa fa-${props.icon} px-1`}></i>
        {props.title}
      </Item>
    </Link>
  );
};

export default NavItem;
